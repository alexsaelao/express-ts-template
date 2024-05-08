import DatabaseConnection from "@configs/databaseConnection";
// import { initModelsTypes } from "@models/init-models";
import { QueryTypes, Sequelize } from "sequelize";

export default class InterfaceMiddleware {
    static sequelize: Sequelize = DatabaseConnection.getInstance().getSequelize();
    // static models: initModelsTypes = DatabaseConnection.getInstance().getModels();

    constructor() {

    }

    public static async select(query: string) {
        return this.sequelize.query(query, { type: QueryTypes.SELECT, raw: true });
    }
}