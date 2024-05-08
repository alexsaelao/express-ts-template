import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sampleTableAttributes {
  id: string;
  name: string;
  lastname: string;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export type sampleTablePk = "id";
export type sampleTableId = sampleTable[sampleTablePk];
export type sampleTableOptionalAttributes = "deleted_at" | "created_at" | "updated_at";
export type sampleTableCreationAttributes = Optional<sampleTableAttributes, sampleTableOptionalAttributes>;

export class sampleTable extends Model<sampleTableAttributes, sampleTableCreationAttributes> implements sampleTableAttributes {
  id!: string;
  name!: string;
  lastname!: string;
  deleted_at?: Date;
  created_at!: Date;
  updated_at!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof sampleTable {
    return sequelize.define('sampleTable', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'sampleTable',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "sampleTable_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof sampleTable;
  }
}
