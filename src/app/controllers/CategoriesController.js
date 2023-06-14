import * as yup from 'yup'
import Categories from '../models/Categories'

class CategoryController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required()
      
    })
    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }
   
    const { name, } = req.body

    const categoryExists = await Categories.findOne({
      where: {name,}
    })
    if (categoryExists) {
      return res.status(400).json({error: 'Category already exists'})
    }

    const {id} = await Categories.create({name,})

    return res.json({name, id})
  }
  async index(req, res) {
    const category = await Categories.findAll()
    return res.json(category)
  }
}

export default new CategoryController()
