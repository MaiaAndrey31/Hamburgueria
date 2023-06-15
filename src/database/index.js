import Sequelize from 'sequelize'
import configDatabase from '../config/database.js'
import User from '../app/models/User.js'
import Product from '../app/models/Products.js'
import Category from '../app/models/Categories.js'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }
}

export default new Database()
