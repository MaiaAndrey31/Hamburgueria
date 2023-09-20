/* eslint-disable prettier/prettier */
import * as Yup from 'yup'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    })

    const validationUserIncorrect = () => {
      return res.status(401).json({ error: 'Email ou Senha não conferem' })
    }
    if (!(await schema.isValid(req.body))) {
      validationUserIncorrect()
    }

    const { email, password } = req.body
    const user = await User.findOne({
      where: { email },
    })
    if (!user) {
      validationUserIncorrect()
    }

    if (!(await user.checkPassword(password))) {
      validationUserIncorrect()
    }

    return res.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
      token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
