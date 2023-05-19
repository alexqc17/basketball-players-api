const { response, request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const nbaplayers={
    'lebron james':{
        'age':38,
        'team':'Los Angeles Lakers',
        'position':'power forward',
        'number':'#6'
    },
    'giannis antetokounmpo':{
        'age':28,
        'team':'Milwaukee Bucks',
        'position':'center',
        'number':'#34'
    },

    'jayson tatum':{
        'age':25,
        'team':'Boston Celtics',
        'position':'power forward',
        'number':'#0'
    },

    'unkwown':{
        'age':'unkwown',
        'team':'unkwown',
        'position':'unkwown',
        'number':'unkwown'
    }

    
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api',(request, response)=> {
    response.json(nbaplayers)
})

app.get('/api/:names',(request,response)=>{
    const playername = request.params.names.toLocaleLowerCase()
    if (nbaplayers[playername]){
        response.json(nbaplayers[playername])
    } else {
        response.json(nbaplayers['unkwown'])
    }
})

app.listen(PORT,() =>{
    console.log(`The server is now running on port ${PORT}`)

})
