const express = require("express")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())

app.get('/search', async (req, res) => {
    const termo = req.query.termo

    if (!termo) {
        return res.status(400).json({ erro: "O parâmetro 'termo' é obrigatório" })
    }

    const nasa = axios.create({
        baseURL: 'https://images-api.nasa.gov/'
    })

    const result = await nasa.get('/search', {
        params: {
            q: termo,
            media_type: 'image',
        }
    })

    res.json({ items: result.data.collection.items })
})


app.get('/search-year', async (req, res) => {
    const ano = req.query.ano

    if (!ano) {
        return res.status(400).json({ erro: "O parâmetro 'ano' é obrigatório" })
    }

    const nasa = axios.create({
        baseURL: 'https://images-api.nasa.gov/'
    })

    const result = await nasa.get('/search', {
        params: {
            year_start: ano,
            year_end: ano,
            media_type: 'image'
        }
    });

    res.json({ items: result.data.collection.items })
})



app.get('/apod', async (req, res) => {
    const nasa = axios.create({
        baseURL: 'https://api.nasa.gov/planetary/'
    })

    const result = await nasa.get('/apod', {
        params: {
            api_key: process.env.NASA_KEY
        }
    })
    
    res.json(result.data)
})


app.get('/apod-3', async (req, res) => {
    const nasa = axios.create({
      baseURL: 'https://api.nasa.gov/planetary/'
    })

    const result = await nasa.get('/apod', {
      params: {
        api_key: process.env.NASA_KEY,
        count: 3       
      }
    });

    res.json(result.data)
  
})



const port = 3000
app.listen(port, () => {console.log(`Back. Porta ${port}`)})

