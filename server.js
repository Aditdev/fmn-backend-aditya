const express = require('express')
const app = express()
const hP = require('bcrypt')
const users = []


app.use(express.urlencoded({ extended: false }))
app.set('view-engine', 'ejs')
app.get('/', (req, res) => {
    res.render("index.ejs", { name: 'Aditya' })
})

app.get('/login', (req, res) => {
    res.render("login.ejs")

})
app.get('/register', (req, res) => {
    res.render("register.ejs")

})


app.post('/register', (req, res) => {
    try {
        const hashedPassword = bcrypt.hash(req.body.password, 10)
        window.localStorage.setItem('E-mail', req.body.email)
        window.localStorage.setItem('Password', hashedPassword)
    }
    catch {
        console.log("Fucked up");
    }

}
)

app.post('/login', (req, res) => {

}
)
app.listen(3000)

