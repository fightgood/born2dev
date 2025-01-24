const express       = require('express')
const chalk         = require('chalk')
const debug         = require('debug')('app')
const morgan        = require('morgan')
const path          = require('path')
const products      = require('./data/products.json')
const productRouter = express.Router()

const app  = express()
const PORT = process.env.PORT || 3000

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', './src/views')
app.set('view engine', 'ejs')

productRouter.route('/').get((req, res) => {
  res.render('products',
    products,
  )
})

productRouter.route('/1').get((req, res) => {
  res.send('Hello NACC2! I am product 1')
})

app.use('/products', productRouter)

app.get('/', (req, res) => {
  // res.send('Hello NACC2!')
  res.render('index', { username: 'SUDEE SEDUM', data: ['a', 'b', 'c'] })
})

app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT)
  console.log('Listening on PORT ' + chalk.green(PORT))
  console.log(chalk.blue('Listening on PORT ' + PORT))
  debug(chalk.blue('Listening on PORT ' + PORT))
})
