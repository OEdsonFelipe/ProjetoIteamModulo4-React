//src/App.jsx
import Header from './Components/Header'
import Footer from './Components/Footer'
import BemVindo from './Components/BemVindo'
import SecaoHabitos from './Components/SecaoHabitos'
import HabitList from './Components/HabitList'
import HabitCard from './Components/HabitCard'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() { 
  const habits = [
    { id: 1, titulo: 'Exercício', meta:5 , ativo: true , diasFeitos: 5},
    { id: 2, titulo: 'Meditação', meta:7 , ativo: false , diasFeitos: 0},
    { id: 3, titulo: 'Leitura', meta:6 , ativo: true , diasFeitos: 6},
    { id: 4, titulo: 'Hidratação', meta:7 , ativo: true , diasFeitos: 7},
    { id: 5, titulo: 'Sono de qualidade', meta:5 , ativo: true , diasFeitos: 5}
  ]
 return (
  <div>
    <Header/>
    <BemVindo nomeUsuario="Turma Iteam" totalHabitos={habits.length}/>
    <SecaoHabitos titulo="Meus Hábitos">
      <HabitList habits={habits} />
    </SecaoHabitos> 
    <Footer/>
  </div>
 )
}

export default App
