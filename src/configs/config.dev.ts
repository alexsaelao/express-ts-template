export default class Config {

    public static readonly NODE_ENV = process.env.NODE_ENV;
    public static readonly PRODUCTION = "production";
	public static readonly DEVELOPMENT = "development";
    public static readonly validatorUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    public static readonly SERVER = {
        NAME: "demo-server",
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV,
        TIMEZONE: "UTC"
    };

    public static readonly DATABASE = {
        HOST: process.env.DB_HOSTNAME,
        DIRECT: process.env.DB_DIRECT,
        PORT: process.env.DB_PORT,
        NAME: process.env.DB_NAME,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        TIMEZONE: "00:00",
    };
}