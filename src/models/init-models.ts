import type { Sequelize } from "sequelize";
import { sampleTable as _sampleTable } from "./sampleTable";
import type { sampleTableAttributes, sampleTableCreationAttributes } from "./sampleTable";

export {
  _sampleTable as sampleTable,
};

// Manual add initModelsTypes
export type initModelsTypes = {
  sampleTable: typeof _sampleTable
}

export type {
  sampleTableAttributes,
  sampleTableCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const sampleTable = _sampleTable.initModel(sequelize);


  return {
    sampleTable: sampleTable,
  };
}
