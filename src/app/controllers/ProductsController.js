import * as yup from 'yup'
import Product from '../models/Products'

class ProductsController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      price: yup.number().required(),
      category: yup.string().required(),
    })
    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }
    const { filename: path } = req.file
    const { name, price, category } = req.body

    const product = await Product.create({
        name,
        price,
        category,
        path,
    })

    return res.json(product )
  }
  async index(req, res) {
    const products = await Product.findAll()
    return res.json(products)
  }
}

export default new ProductsController()
