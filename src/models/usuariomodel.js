import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'


const Usuario = sequelize.define('usuario',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombres: {
        allowNull: false,
        type: DataTypes.TEXT,
        field:'nombres'
    },
    apellidos:{ 
        allowNull:false,
        type: DataTypes.TEXT,
        field: 'apellidos'
    },
    email:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'email'
    },
    contrasenia:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'contrasenia'
    },
    username:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'username'
    }, 
    categories:{
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'categories'
    } 
})
  
export default Usuario;

