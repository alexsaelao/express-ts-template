import { Dialect, Sequelize } from "sequelize";
import Config from "@configs/config";
// import { initModels, initModelsTypes } from "@models/init-models";

export default class DatabaseConnection {
    private static _instance: DatabaseConnection;
    private readonly sequelize: Sequelize;
    // private readonly models: initModelsTypes;

    private constructor() {

        this.sequelize = new Sequelize(Config.DATABASE.NAME!, Config.DATABASE.USERNAME!, Config.DATABASE.PASSWORD!, {
            host: Config.DATABASE.HOST!,
            dialect: Config.DATABASE.DIRECT as Dialect, /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
            port: parseInt(Config.DATABASE.PORT!),
            define: {
                underscored: true,
                deletedAt: "deleted_at",
                createdAt: "created_at",
                updatedAt: "updated_at"
            },
            logging: false,
            dialectOptions: {
                connectTimeout: 60000, // 60 seconds
                idle_in_transaction_session_timeout: 60000 // 60 seconds
            }
        });

        // this.models = initModels(this.sequelize);
        
        this.sequelize
            .authenticate()
            .then(() => {
                console.log(`database connection successful`);
            })
            .catch((error: Error) => {
                console.log(`database connection failed`, error);
            });

    }
    public static getInstance(): DatabaseConnection {
        return this._instance || (this._instance = new DatabaseConnection());
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }

    // public getModels(): initModelsTypes {
    //     return this.models;
    // }
}