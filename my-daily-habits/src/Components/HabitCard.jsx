function HabitCard({ titulo, meta, ativo, diasFeitos = 0 , categoria = 'Geral'}) {
    const metaAtingida = diasFeitos >= meta 
    const mensagemMeta = metaAtingida ? 'Meta da semanma atingida!' : `${diasFeitos} de ${meta} dias concluidos`
    return (
        <div className="habit-card">  
            <h3>{titulo}</h3>
            <p>{mensagemMeta}</p>
            <small>Categoria: {categoria}</small>
            {/*Ternário: dois resultados possíveis*/}
            <span>{ativo ? 'Ativo' : 'Pausado'}</span>
            {/* &&: um resultado ou nada */}
            {metaAtingida && (
            <p>Parabéns!!! Você manteve sua sequência essa semana!!!</p>
            )}
        </div>
    )
}

export default HabitCard