{
    interface Config {
        apiKey: string
        timeout: number
        retries: number
    }

    type ReadonlyConfig = {
        readonly [K in keyof Config]: Config[K] // mapping keys: makes all properties readonly
    }

    const config1: ReadonlyConfig = {
        apiKey: "2l3kn4",
        timeout: 123,
        retries: 2
    }

    // config1.apiKey = "lqkwne" error because it was set was to readonly

    type OptionalConfig = {
        [K in keyof Config]?: Config[K] // mapping keys: makes all properties optional
    }

    const config2: OptionalConfig = {
        apiKey: "lk1n23lkn213" // worked because all properties was set to optional
    }

    type NullableConfig = {
        [K in keyof Config]: Config[K] | null // mapping keys: makes all properties nullable
    }

    const config3: NullableConfig = {
        apiKey: null, // worked because all properties was set to be nullable
        timeout: null,
        retries: null
    }
}