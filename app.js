const express = require('express')
const chalk   = require('chalk')
const debug   = require('debug')('app')
const morgan  = require('morgan')
const app     = express()
const port    = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Listening on port ' + port)
  console.log('Listening on port ' + chalk.green(port))
  console.log(chalk.blue('Listening on port ' + port))
  debug(chalk.blue('Listening on port ' + port))
})
