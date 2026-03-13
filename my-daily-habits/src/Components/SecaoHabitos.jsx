//src/components/SecaoHabitos.jsx
function SecaoHabitos({ titulo, children }) {
  return ( 
    <section>
        <h2>{titulo}</h2>
        <div className="Lista-Habitos">
          {children}
        </div>
    </section>
  )
}

export default SecaoHabitos