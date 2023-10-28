import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
// solo es un ejemplo
const hostname = 'postgresql://postgres:f30102002@localhost:5433/wisewallet'
const username = 'postgres'
const password = 'password123.'
const database = 'midb'
const port = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    ssl: {rejectUnauthorized: false},
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})


export default sequelize
