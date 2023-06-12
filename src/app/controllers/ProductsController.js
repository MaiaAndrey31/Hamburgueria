import * as yup from "yup"

class ProductsController{
async store(req,res){

    const schema = yup.object().shape({
        name: yup.string().required(),
        price: yup.number().required(),
        category: yup.string().required(),
    })
    try {
        await schema.validateSync(req.body, { abortEarly: false})

     }
      catch(err) { return res.status(400).json({error: err.errors})
     }

     return res.json({ ok: true })

}
}


export default new ProductsController()