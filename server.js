const express = require('express');
const app = express();

app.get('/api/users',(req,res)=>{
    res.json([
        {
            id:1,
            username:'Freddy92'
        },{
            id:2,
            username:'Steve32'
        }
    ])
})

app.get('/api/games',(req,res)=>{
    res.json([
        {
            id:1,
            console:'XBOX'
        },{
                                      id:2,
            console:'PS4'
        }
    ])
})

const port = process.env.PORT || 3003;

app.listen(port)