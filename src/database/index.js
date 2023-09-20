import Sequelize from 'sequelize'
import configDatabase from '../config/database.js'
import User from '../app/models/User.js'
import Product from '../app/models/Products.js'
import Category from '../app/models/Categories.js'
import mongoose from 'mongoose'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:2BqGbB3zSLitONTrMitE@containers-us-west-110.railway.app:6353/railway'
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:e0VPqHTG9Aqa8AbeLphN@containers-us-west-148.railway.app:7068',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}

export default new Database()
