const url = "https://api.mercadolibre.com/sites/MLC/categories"

async function obtenerCategorias() {
  try {
    const response = await fetch(url) 
    const data = await response.json()
    mostrarCategorias(data) 
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

function mostrarCategorias(categorias) {
  const lista = document.getElementById("lista-categorias")
  categorias.forEach((categoria) => {
    const li = document.createElement("li")
    li.textContent = categoria.name 
    lista.appendChild(li) 
  })
}

obtenerCategorias()


//Clase
const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send("Menú")
})
app.get("/alimentos",(req,res)=>{
    res.send("Alimentos")
})
app.get("/tecnologia",(req,res)=>{
    res.send("Tecnologia")
})
app.use((req,res)=>{res.status(404).send("Page not found - 404")})

app.listen(3000)
