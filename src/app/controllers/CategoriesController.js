import * as yup from 'yup'
import Categories from '../models/Categories'
import User from '../models/User'
import Category from '../models/Categories'

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

    const { admin: isAdmin } = await User.findByPk(req.userId) 

    if(!isAdmin) {
      return res.status(401).json()
    }
   
    const { name, } = req.body
    const { filename: path } = req.file

    const categoryExists = await Categories.findOne({
      where: {name,}
    })
    if (categoryExists) {
      return res.status(400).json({error: 'Category already exists'})
    }

    const {id} = await Categories.create({name, path})

    return res.json({name, id})
  }
  async index(req, res) {
    const category = await Categories.findAll()
    return res.json(category)
  }

  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string(),
      
    })
    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ error: err.errors })
    }

    const { admin: isAdmin } = await User.findByPk(req.userId) 

    if(!isAdmin) {
      return res.status(401).json()
    }
   
    const { name, } = req.body

    const { id, } = req.params
    const category = await Category.findByPk(id)
    if (!category){
      return res.status(401).json({error: 'Categoria não existe!'})
    }


    let path 
    if(req.file){
      path = req.file.filename
    }

await Categories.update({name, path}, {where: {id}})

    return res.status(200).json()
  }
}

export default new CategoryController()
