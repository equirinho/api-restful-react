const express = require ('express')
const consign = require ('consign')
module.exports =()=>{
    const app = express()
    consign()
        .include('routers')
        .into(app)
        return app
}

//requisição by post
// module.exports = app => { 
//     app.get('/hello', (req, res)=>res.send('hello world!') )
//     app.post('/hello', (req, res)=>res.send('hello world by post!') )		
// }


const app = express()
    app.use(express.json())
    consign()
