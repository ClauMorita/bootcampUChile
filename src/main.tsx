import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HomePage } from './page/HomePage.tsx'
import peliculas from './data/peliculas.json'
import { Peliculas } from './components/Peliculas'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {
      peliculas.map((pelicula) => {
        return (<Peliculas
          titulo= {pelicula.titulo}
          resumen= {pelicula.resumen}
          imagen= {pelicula.imagen}
          enlace= {pelicula.enlaceImdb}
          >      
          </Peliculas> )
      })
    }
    
  </StrictMode>,
)
