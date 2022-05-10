const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const contactRouter = require('./routes/contact')
const aboutRouter = require('./routes/about')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
const signupRouter = require('./routes/signup')
const footerRouter = require('./routes/footer')
const accountRouter = require('./routes/account')
const searchRouter = require('./routes/search')

const usersRouter = require('./routes/users')

const app = express()

require('./src/database')

app.use(
   session({
      secret: '2C44-4D44-WppQ38S',
      resave: false,
      saveUninitialized: false
   })
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/', footerRouter)
app.use('/', signupRouter)
app.use('/', accountRouter)
app.use('/contato', contactRouter)
app.use('/about', aboutRouter)
app.use('/search', searchRouter)
app.use('/login', loginRouter)

app.use('/logout', logoutRouter)

app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message
   res.locals.error = req.app.get('env') === 'development' ? err : {}

   // render the error page
   res.status(err.status || 500)
   res.render('error', {
      usuario: req.session.usuario
   })
})

module.exports = app
