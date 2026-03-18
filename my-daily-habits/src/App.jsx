// src/App.jsx
import './App.css'
import { useEffect, useState } from 'react'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import BemVindo from "./Components/BemVindo"
import SecaoHabitos from "./Components/SecaoHabitos"
import HabitList from "./Components/HabitList"

const HABITOS_INICIAIS = [
  { id: 1, nome: 'Exercicio', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
  { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
  { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
  { id: 4, nome: 'Hidratação', descricao: 'Beber 2 litros de água', meta: 7, ativo: true, diasFeitos: 6 },
]

function App() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('my-daily-habits')
    if (!stored) return HABITOS_INICIAIS
    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('my-daily-habits', JSON.stringify(habits))
  }, [habits])

  const totalHabitos = habits.length

  return (
      <div>
        <Header />
        <BemVindo nomeUsuario="turma iteam" totalHabitos={totalHabitos} />
        <SecaoHabitos titulo="Meus Hábitos">
         <HabitList habits={habits} setHabits={setHabits} />
        </SecaoHabitos>
        <Footer />
      </div>
  )
}

export default App