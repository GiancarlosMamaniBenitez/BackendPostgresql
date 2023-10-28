import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Tarjeta = sequelize.define('tarjetas',{

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cardsName: {
        allowNull: false,
        type: DataTypes.TEXT,
        field:'cardsName'
    },
    cvv:{ 
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'cvv'
    },
    number:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'number'
    },
    selectedCard:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'selectedCard'
    },
    mm:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'mm'
    },
    yyyy:{
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'yyyy'
    },
    savingGoal:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'savingGoal'
    },
    spendingLimit:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'spendingLimit'
    },
    id_usuario:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'id_usuario'
    } 
    
})




export default Tarjeta;
