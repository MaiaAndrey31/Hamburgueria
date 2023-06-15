
import * as yup from 'yup'

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
      catch(err) { return res.status(400).json({error: err.errors})
     }
       

       
    return res.status(201).json(req.body)
    }
}

export default new OrderController()