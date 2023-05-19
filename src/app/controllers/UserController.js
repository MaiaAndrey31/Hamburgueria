import { v4 } from 'uuid'

import User from '../models/User'

import * as yup from 'yup'

class UserController{
   async store(req, res){

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password_hash: yup.string().required().min(6),
        admin: yup.boolean(),
    })
        const { name, email, password_hash, admin} = req.body

       
const user = await User.create({
        id: v4(),
        name,
        email,
        password_hash,
        admin,
    })

    return res.status(201).json(user)
    }
}

export default new UserController()