function HabitList() {
const [novoNome,      setNovoNome]      = useState('')
const [novaDescricao, setNovaDescricao] = useState('')
const [novaCategoria, setNovaCategoria] = useState('')
const [habits, setHabits] = useState([/*array do passo1*/ ])
const removerHabit = (id) => {
  setHabits(habits.filter(habit => habit.id !== id))
 }

 const adicionarHabit = (event) => {
  event.preventDefault()

  if (!novoNome.trim()) {
    alert('Informe um nome para o hábito.')
    return
  }

  const novoHabit = {
    id: Date.now(),
    nome: novoNome,
    descricao: novaDescricao,
    meta: 7,              // padrão
    ativo: true,          // padrão
    diasFeitos: 0,        // padrão
    categoria: novaCategoria || 'Geral',
  }

  setHabits([...habits, novoHabit])

  // Limpar os campos após adicionar
  setNovoNome('')
  setNovaDescricao('')
  setNovaCategoria('')
}

return (
  <section>
    <form onSubmit={adicionarHabit} className="habit-form">
      <div>
        <label>
          Nome do hábito *
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Descrição
          <input
            type="text"
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Categoria
          <input
            type="text"
            value={novaCategoria}
            onChange={(e) => setNovaCategoria(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Adicionar hábito</button>
    </form>

    <ul>
      {habits.length === 0 && <p>Nenhum hábito cadastrado ainda.</p>}
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          nome={habit.nome}
          descricao={habit.descricao}
          meta={habit.meta}
          ativo={habit.ativo}
          diasFeitos={habit.diasFeitos}
          onRemover={() => removerHabit(habit.id)}
        />
      ))}
    </ul>
  </section>
 ) 
}

