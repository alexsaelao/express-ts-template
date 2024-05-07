export default class Config {

    public static readonly NODE_ENV = process.env.NODE_ENV;
    public static readonly PRODUCTION = "production";
	public static readonly DEVELOPMENT = "development";
    public static readonly validatorUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    public static readonly SERVER = {
        NAME: "demo-server",
        PORT: process.env.PORT_PROD,
        NODE_ENV: process.env.NODE_ENV,
        TIMEZONE: "UTC"
    };

    public static readonly DATABASE = {
        HOST: process.env.DB_HOSTNAME_PROD,
        DIRECT: process.env.DB_DIRECT_PROD,
        PORT: process.env.DB_PORT_PROD,
        NAME: process.env.DB_NAME_PROD,
        USERNAME: process.env.DB_USERNAME_PROD,
        PASSWORD: process.env.DB_PASSWORD_PROD,
        TIMEZONE: "00:00",
    };
}