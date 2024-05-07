import * as dotenv from "dotenv";
dotenv.config();

import * as DevConfig from "@configs/config.dev";
import * as ProdConfig from "@configs/config.prod";

const Config = process.env.NODE_ENV === "development" ? DevConfig.default: ProdConfig.default;

export default Config;