<script setup lang="ts">

const INITIAL_RECONNECT_DELAY = 1000;

const URL = 'ws://localhost:8080/socket.io'

const connect = (): WebSocket => {


    const ws = new WebSocket(URL);

    ws.binaryType = "blob";

    ws.onclose = (event) => {

        console.log(`[close] Connection closed, code=${event.code} reason=${event.reason}`);

        reconnect()
    }



    ws.onopen = (e) => {
        console.log('[open] Connection established');
    };

    ws.onmessage = async (msg) => {
        const data = await msg.data.text();
        console.log(`[message] Data received from server: ${data}`);
    };

    ws.onerror = (error) => {
        console.log(`[error] ${error}`);
    };

    return ws;

};


let socket = connect()

const reconnect = () => {
    setTimeout(() => {
        socket = connect()
    }, INITIAL_RECONNECT_DELAY + Math.floor(Math.random() * 4000));
}

const send = () => {
    if (socket.OPEN) {
        const msg = {
            data: "Domain Driven Design, o rato roeu a roupa do rei",
        }
        const buffer = new Blob([JSON.stringify(msg)], { type: 'application/json' })

        socket.send(buffer);
    }
};

// import { useWebsocket, useWebsocketEvent } from '@/composables/useWebsocket'

// const ws = await useWebsocket().connect()

// useWebsocketEvent('chat-message', (data) => {
//     console.log('Recebido do servidor:', data)
// })


</script>

<template>

    <div>
        <button @click="send">Send</button>
    </div>

</template>

<style lang="scss">
</style>
