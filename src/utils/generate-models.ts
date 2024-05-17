import { SequelizeAuto } from 'sequelize-auto';
import * as dotenv from "dotenv";
dotenv.config();
// Configure the database connection parameters
const config: any = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //
  dialect: process.env.DB_DIRECT, // e.g., 'mysql', 'postgres', 'sqlite'
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};
const tablesList: Array<string> = [
  'sample_table',
];
const skipTables: Array<string> = [];

// Configure Sequelize-auto options
const options: any = {
  directory: `${__dirname}/../models`, // The directory where the models will be generated
  tables: tablesList, // The database tables you want to generate models for
  skipTables: skipTables, // The database tables you don't want to generate models for
  lang: 'ts', // Specify the language for the generated models (TypeScript in this case)
  noWrite: false, // Whether to noWrite existing files
  noInitModels: false, // Whether to noInitModels existing files
  additional: {
    // e.g., 'camelCase': true,
  }, // Additional options if needed
  dialect: config.dialect,  // The dialect/engine that you're using
  port: config.port, // Port number for database
  useDefine: true,  // Use `sequelize.define` instead of `init` for es6|esm|ts
  singularize: true, //  Singularize model and file names from plural table names [boolean]
  schema: 'public', // Database schema from which to retrieve tables[string]
  views: true, // Include database views in generated models  [boolean]
  caseModel: 'c', // Set case of model names: c|l|o|p|u
  caseFile: 'c' // Set case of file names: c|l|o|p|u|k
};
// Instantiate Sequelize-auto with the configuration
const auto = new SequelizeAuto(config.database, config.username, config.password, options);

// Generate models
auto.run().then(data => {
  // console.log(data.tables);      // table and field list
  // console.log(data.foreignKeys); // table foreign key list
  // console.log(data.indexes);     // table indexes
  // console.log(data.hasTriggerTables); // tables that have triggers
  // console.log(data.relations);   // relationships between models
  // console.log(data.text)         // text of generated models
});
