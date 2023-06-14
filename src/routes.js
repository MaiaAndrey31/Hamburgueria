import { Router } from 'express'

import multer from 'multer'
import multerConfig from "./config/multer"

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProductsController from './app/controllers/ProductsController'
import CategoriesController from './app/controllers/CategoriesController'

import authMiddleware from '../src/app/middlewares/auth'

const upload = multer(multerConfig)
const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.post('/products', upload.single('file'), ProductsController.store)
routes.get('/products', ProductsController.index)

routes.post('/categories', CategoriesController.store)
routes.get('/categories', CategoriesController.index)

export default routes
