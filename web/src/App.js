import React, { useEffect, useState } from 'react';
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'


// 3 conceitos:
// 1 : Componente - uma funcao que retorna HTML/CSS/JS. OU seja o qual não interfere
// no restante da aplicação
// 2 : Estado - Imformação mantida pelo componente (Lembra : IMUTABIBLIDADE )
// 3 : Propriedade - imformação que um componente PAI passa para componente FILHO



// funcao que retorna HTML
function App() {
  // const para guardar os devs
  const [devs, setDevs] = useState([])

  // buscar devs
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }
    loadDevs()
  }, [])
  // fim buscar devs

  // funcao que dispara quando click em salvar
  async function handleAddDev(data) {
    e.preventDefault()

    // cadastrar no banco um dev
    const response = await api.post('/devs', data) 
    // console.log(response.data)
   
    setDevs([...devs, response.data])
  }
  // fim da funcao
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
           <DevItem key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
