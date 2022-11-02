module.exports = app => { 
    app.get('/hello', (req, res)=>res.send('hello world!') )
    app.get('/oi', (req, res)=>res.send('oi mundo!') )
    app.get('/hola', (req, res)=>res.send('hola mundo!') )
    app.get('/', (req, res)=>res.send('OLá grande mundo!') )
    }
    