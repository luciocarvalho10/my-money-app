const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrosFromDB = (res, dbErros) => {
  const errors = []
  _.forIn(dbErros.erros, error => errors.push(error.message))
  return res.status(400).json({ errors })
}

const login = (req, res, next) => {
  const email = req.body.email || ''
  const password = req.body.password || ''

  User.findOne({email}, (err, user) => {
    if (err) {
      sendErrosFromDB(res, err)
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user, env.secretAuth, {expiresIn: '1 day'})
      const {name, email} = user
      res.json({name, email, token})
    } else {
      return res.status(400).send({errors: ['Usuário/Senha inválidos.']})
    }
  })
}

const validateToken = (req, res, next) => {
  const token = req.body.token || ''
  jwt.verify(
    token,
    env.secretAuth,
    (err, decoded) => res.status(200).send({valid: !err})
  )
}

const signup = (req, res, next) => {
  const name = req.body.name || ''
  const email = req.body.email || ''
  const password = req.body.password || ''
  const confirmPassword = req.body.confirmPassword || ''

  if(!email.match(emailRegex)) {
    return res.status(400).send({errors: ['O email informado está inválido.']})
  }

  if(!password.match(passwordRegex)) {
    return res.status(400).send({errors: [
      'Senha precisa ter 1 letra maiúscula.',
      'Senha precisa ter 1 letra minúscula.',
      'Senha precisa ter 1 número.',
      'Senha precisa ter 1 caractere especial(@#$%).',
      'Senha precisa ter tamanho entre 6 e 12.'
    ]})
  }

  const salt = bcrypt.genSaltSync()
  const passwordHash = bcrypt.hashSync(password, salt)
  if(!bcrypt.compareSync(confirmPassword, passwordHash)) {
    res.status(400).send({errors: ['Senhas não conferem.']})
  }

  User.findOne({email}, (err,user) => {
    if(err) {
      return sendErrosFromDB(res, err)
    }
    else if (user) {
      res.status(400).send({erros: ['Usuário já existe.']})
    }
    else {
      const newUser = new User({name, email, password: passwordHash})
      newUser.save(err => {
        if(err) { return sendErrosFromDB(res, err)}
        else { login(req, res, next)}
      })
    }
  })
}

module.exports = { login,signup, validateToken }