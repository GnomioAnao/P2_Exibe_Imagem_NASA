const express = require("express")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())

    const nasa = axios.create({
        baseURL: 'https://images-api.nasa.gov/'
    })

app.get('/search', async (req, res) => {
    const termo = req.query.termo

    if (!termo) {
        return res.json({ erro: "O parâmetro 'termo' é obrigatório" })
    }
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
  const hoje = new Date()
  const datas = []

  for (let i = 1; i <= 3; i++) {
    const d = new Date(hoje)
    d.setDate(hoje.getDate() - i)
    datas.push(d.toISOString().split('T')[0])
  }

  try {
    const resultados = []


    for (const data of datas) {
      const resp = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}&date=${data}`
      );

      if (resp.data.media_type === "image") {
        resultados.push({
          url: resp.data.url,
          date: resp.data.date
        });
      }
    }

    res.json(resultados)

  } catch (err) {
    console.log(err)
    res.status(500).json({ erro: "Erro ao buscar dados" })
  }
})



const port = 3000
app.listen(port, () => {console.log(`Back. Porta ${port}`)})