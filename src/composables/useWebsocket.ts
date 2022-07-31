import { onBeforeUnmount } from "vue"

let socket: WebsocketAdapter

export type WebsocketListener = (data: any) => void

export interface WebsocketSubscription {
    off(): void
}

export interface WebsocketMessage {
    event: string
    payload: any
}

export interface WebsocketAdapter {
    connect(): Promise<void>
    disconnect(): Promise<void>
    on(event: string, listener: WebsocketListener): WebsocketSubscription
    once(event: string, listener: WebsocketListener): WebsocketSubscription
    off(event: string, listener: WebsocketListener): void
    emit(event: string, data: any): void
}

const MIN_RECONNECT_DELAY = 1000
const MAX_RECONNECT_DELAY = MIN_RECONNECT_DELAY - 4000

class NativeWebsocketAdapter implements WebsocketAdapter {

    #ws!: WebSocket
    #listeners = new Map<string, Set<WebsocketListener>>();

    constructor(private readonly options: any) { }

    async connect(): Promise<void> {

        if (this.#ws?.readyState === WebSocket.OPEN) {
            return;
        }

        return new Promise((resolve, reject) => {

            console.log('Connecting to websocket...')
            this.#ws = new WebSocket(this.options.url)

            this.#ws.addEventListener('open', () => resolve())
            this.#ws.addEventListener('error', (err) => reject(err))

            if (this.options.reconnect)
                this.#ws.addEventListener('close', (e) => e.code !== 0 && this.reconnect())

            this.#ws.addEventListener('message', async e => {

                const message = JSON.parse(await e.data.text());
                console.log(`Received message`, message);

                const listeners = this.#listeners.get(message.event) ?? new Set<WebsocketListener>()

                listeners.forEach((listener) => listener(message.payload))

            })

        })
    }


    private reconnect() {

        const time = MIN_RECONNECT_DELAY + (Math.random() * MAX_RECONNECT_DELAY)

        console.log(`Reconnecting in ${time}ms`)

        setTimeout(() => this.connect(), time)

    }

    async disconnect(): Promise<void> {
        if (!this.#ws) {
            return;
        }

        return new Promise((resolve, reject) => {
            this.#ws.addEventListener('close', () => resolve())
            this.#ws.addEventListener('error', (err) => reject(err))
            this.#ws.close()
        })
    }

    on(event: string, listener: WebsocketListener): WebsocketSubscription {
        const listeners = this.#listeners.get(event) ?? new Set<WebsocketListener>()

        this.#listeners.set(event, listeners.add(listener))

        return {
            off: () => this.off(event, listener)
        }
    }

    off(event: string, listener: WebsocketListener) {
        const listeners = this.#listeners.get(event) ?? new Set<WebsocketListener>()

        listeners.delete(listener)

        if (listeners.size === 0) {
            this.#listeners.delete(event)
        }
    }

    once(event: string, listener: WebsocketListener): WebsocketSubscription {

        const subscription = this.on(event, (data) => {
            subscription.off()
            listener(data)
        });

        return subscription
    }

    private send(message: WebsocketMessage) {
        console.log(`Sending message: ${JSON.stringify(message)}`);

        this.#ws.send(new Blob([JSON.stringify(message)], { type: 'application/json' }))
    }

    emit(event: string, payload: any) {
        return this.send({ event, payload })
    }
}

export function useWebsocket(): WebsocketAdapter {
    if (!socket) {
        socket = new NativeWebsocketAdapter({
            url: 'ws://localhost:8080/socket.io',
            reconnect: true
        })
    }

    return socket
}

export function useWebsocketEvent(event: string, listener: WebsocketListener): WebsocketSubscription {

    const socket = useWebsocket()
    const subscription = socket.on(event, listener)

    onBeforeUnmount(() => subscription.off())

    return subscription

}