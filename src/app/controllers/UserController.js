import { v4 } from 'uuid'

import User from '../models/User'

import * as yup from 'yup'

class UserController{
   async store(req, res){

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(6),
        admin: yup.boolean(),
    })
    try {
        await schema.validateSync(req.body, { abortEarly: false})

     }
      catch(err) { return res.status(400).json({error: err.errors})
     }
        const { name, email, password, admin} = req.body

        const userExists = await User.findOne({ where: {email}})

        if(userExists) {
            return res.status(409).json({error: 'Usuario já existe'})
        }

       
const user = await User.create({
        id: v4(),
        name,
        email,
        password,
        admin,
    })

    return res.status(201).json(user)
    }
}

export default new UserController()