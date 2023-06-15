
import * as yup from 'yup'
import Product from '../models/Products'
import Category from '../models/Categories'
import Order from '../schemas/Order'

class OrderController{
   async store(req, res){

    const schema = yup.object().shape({
        products: yup.array().required().of(
            yup.object().shape({
                id: yup.number().required(),
                quantity: yup.number().required(),
            })
        ),
       
    })
    try {
        await schema.validateSync(req.body, { abortEarly: false})

     }
      catch(err) { 
        return res.status(400).json({error: err.errors})
     }

     const productsId = req.body.products.map((product) => product.id)
     const updatedProducts = await Product.findAll({
        where: {
            id: productsId,
        },
        include: {
            model: Category,
            as: 'category',
            attributes: ['name'],
        }
     })

     const editedProduct = updatedProducts.map(product => {

        const productIndex = req.body.products.findIndex(
            reqProduct => reqProduct.id == product.id)





        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category.name,
            url: product.url,
            quantity: req.body.products[productIndex].quantity,
        }
        return newProduct
     })



       const order = {
        user:{
            id: req.userId,
            name: req.userName,
        },
        products: editedProduct,
        status: 'Pedido realizado',
       }

       const orderResponse = await Order.create(order) 

       
    return res.status(201).json(orderResponse)
    }

    async index(req, res) {
        const orders = await Order.find()
        return res.json(orders)
    }

    async update(req, res) {
        const schema = yup.object().shape({
            status: yup.string().required()
           
        })
        try {
            await schema.validateSync(req.body, { abortEarly: false})
    
         }
          catch(err) { 
            return res.status(400).json({error: err.errors})
         }
    


        const {id} = req.params
        const {status} = req.body

        try{
        await Order.updateOne({_id: id}, {status})
        
    }
    catch(error){
        return res.status(400).json({error: error.message})
    }

        return res.json({message: 'Status Atualizado com sucesso!'})
    }
   
    
    
}

export default new OrderController()