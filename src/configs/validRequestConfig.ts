export default class ValidRequestConfig {
    public static readonly bodySetting = {
        sample: {
            create: ["name", "email"],
            update: ["name", "email"],
        },
    }
    public static readonly querySetting = {
        sample: { fetch: ["limit", "page"], },
    }
}