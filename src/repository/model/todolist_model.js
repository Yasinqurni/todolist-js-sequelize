const { Model, DataTypes } = require("sequelize")
const sequelize = require("../../../pkg/sequelize")

class Todolist extends Model {
}

Todolist.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, 
    tags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  },
)

module.exports = Todolist