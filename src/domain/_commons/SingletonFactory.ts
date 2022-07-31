export function SingletonFactory<T>(factory: () => T) {
    let cache: T;

    return () => cache ??= factory()
}