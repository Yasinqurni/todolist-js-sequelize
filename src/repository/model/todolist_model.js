const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class Todolist extends Model {
}

cart.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      }, 
    tags: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_id'
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