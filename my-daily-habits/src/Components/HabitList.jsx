// src/components/HabitList.jsx
// Passo 1 = Montagem
import { useRef, useState } from 'react'
import HabitCard from './HabitCard'
function HabitList({ habits, setHabits }) {
        const limparHistorico = () => {
            localStorage.removeItem('my-daily-habits')
            setHabits([
                { id: 1, nome: 'Exercicio', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
                { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
                { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
                { id: 4, nome: 'Hidratação', descricao: 'Beber 2 litros de água', meta: 7, ativo: true, diasFeitos: 6 },
            ])
        }
    <button onClick={limparHistorico}>Limpar Histórico</button>
    const removerHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id))}
    const [form, setForm] = useState({
        novoNome: '',
        novaDescricao: '',
        novaCategoria: '',
    })
    const [novaMeta, setNovaMeta] = useState('7')
    const [erroNome, setErroNome] = useState('')
    const [erroMeta, setErroMeta] = useState('')
    const nomeInputRef = useRef(null)
    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'novaMeta') {
            const num = parseInt(value, 10)
            setNovaMeta(value)
            if (value.length > 0 && (Number.isNaN(num) || num < 1 || num > 7)) {
                setErroMeta('Meta deve ser entre 1 e 7 dias.')
            } else {
                setErroMeta('')
            }
            return
        }

        setForm((prev) => ({ ...prev, [name]: value }))

        if (name === 'novoNome') {
            if (value.length > 0 && value.trim().length < 3) {
                setErroNome('O nome deve ter pelo menos 3 caracteres.')
            } else {
                setErroNome('')
            }
        }
    }
    const adicionarHabit = (event) => {
        event.preventDefault()
        if (!form.novoNome.trim()) {
            alert('Informe um nome para o hábito.')
            nomeInputRef.current?.focus()
            return
        }
        if (form.novoNome.trim().length < 3) {
            setErroNome('O nome deve ter pelo menos 3 caracteres.')
            nomeInputRef.current?.focus()
            return
        }
        if (erroNome) {
            nomeInputRef.current?.focus()
            return
        }

        const metaNumero = parseInt(novaMeta, 10)
        if (Number.isNaN(metaNumero) || metaNumero < 1 || metaNumero > 7 || erroMeta) {
            setErroMeta('Meta deve ser entre 1 e 7 dias.')
            return
        }

        const novoHabit = {
            id: Date.now(),
            nome: form.novoNome,
            descricao: form.novaDescricao,
            meta: metaNumero,
            ativo: true,
            diasFeitos: 0,
            categoria: form.novaCategoria || 'Geral',
        }
        setHabits((prev) => [...prev, novoHabit])
        setForm({ novoNome: '', novaDescricao: '', novaCategoria: '' })
        setNovaMeta('7')
        setErroNome('')
        setErroMeta('')
        nomeInputRef.current?.focus()
    }
    return (
        <section>
            <form onSubmit={adicionarHabit} className="habit-form">
                <div>
                    <label>
                        Nome do hábito *
                        <input
                            type="text"
                            name="novoNome"
                            value={form.novoNome}
                            onChange={handleChange}
                            ref={nomeInputRef}
                        />
                    </label>
                    {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
                </div>
                <div>
                    <label>
                        Descrição
                        <input
                            type="text"
                            name="novaDescricao"
                            value={form.novaDescricao}
                            onChange={handleChange}
                            />
                    </label>
                </div>
                <div>
                    <label>
                        Categoria
                        <input
                            type="text"
                            name="novaCategoria"
                            value={form.novaCategoria}
                            onChange={handleChange}
                            />
                    </label>
                </div>
                <div>
                    <label>
                        Meta (dias por semana)
                        <input
                            type="number"
                            name="novaMeta"
                            min="1"
                            max="7"
                            value={novaMeta}
                            onChange={handleChange}
                        />
                    </label>
                    {erroMeta && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroMeta}</p>}
                </div>
                <button type="submit">Adicionar Hábito</button>
            </form>
            <ul>
                {habits.length === 0 
                ?<p>Nenhum hábito cadastrado ainda.</p>
                :<p>Você tem {habits.length} hábitos(s) cadastrados(s).</p>}
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


export default HabitList