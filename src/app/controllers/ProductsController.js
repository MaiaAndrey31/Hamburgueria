import * as yup from 'yup'
import Product from '../models/Products'
import Category from '../models/Categories'

class ProductsController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      price: yup.number().required(),
      category_id: yup.number().required(),
    })
    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }
    const { filename: path } = req.file
    const { name, price, category_id } = req.body

    const product = await Product.create({
        name,
        price,
        category_id,
        path,
    })

    return res.json(product )
  }
  async index(req, res) {
    const products = await Product.findAll({
      include:[
        {
        model: Category, 
        as: 'category',
        attributes: ['id', 'name'],
      },
    ],
    })
    return res.json(products)
  }
}

export default new ProductsController()
