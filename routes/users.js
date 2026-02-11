var express = require('express');
var router = express.Router();
const user = require('../models/model')

router.get('/', async (req, res) => {
  const users = await user.find()
  res.render('index', { users })
})

router.post('/createuser', async (req, res) => {
  const { name, email } = req.body
  await user.create({ name, email })
  res.redirect('/')
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/update/:id', async (req, res) => {
  const { name, email } = req.body
  await user.findByIdAndUpdate(req.params.id, { name, email })
  res.redirect('/')
})

router.put('/edit/:id', async (req, res) => {
  const userData = await user.findById(req.params.id)
  res.render('edit', { user: userData })
})

router.delete('/delete/:id', async (req, res) => {
  await user.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

module.exports = router;
