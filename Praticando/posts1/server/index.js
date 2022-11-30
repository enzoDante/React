const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const session = require('express-session')

const cors = require('cors')

// import {createClient} from '@supabase/supabase-js'
const {createClient} = require('@supabase/supabase-js')

const PROJECT_URL = "https://xdcauufxptlfaznnkmlt.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY2F1dWZ4cHRsZmF6bm5rbWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NjE0MzEsImV4cCI6MTk4NTIzNzQzMX0.oNNSlXb4jU_ZPGTHJa0lHy_IwYnRwp4s_jBauTFl5LQ"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

//config
    //express-session
        app.use(session({
            secret: 'asdvbc',
            resave: true,
            saveUninitialized: true
        }))
    //Body parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    //Cors
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
            res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
            app.use(cors())
            next()
        })

app.get('/', (req, res) => {
    res.send('teste')
})
app.post('/api/Cadastrar', (req, res) => {
    const nome = req.body.nome
    const senha = req.body.senha
    const imagem = req.body.img
    console.log(nome)
    // console.log(imagem)
    // supabase.storage.from("imagens").upload('public/'+ imagem?.name, imagem)
    //banco de dados - tabela usuarios insert
    supabase.from('usuarios').insert({
        nome: nome,
        senha: senha,
        imagem: imagem
        
    }).then((valor) => {
        console.log(valor)
    }).catch((err) => {
        console.log(err)
    })
    // res.send('teste')
    res.send(req.body)
})

app.listen(3001, () => {
    console.log('server na porta: http://localhost:3001')
})
