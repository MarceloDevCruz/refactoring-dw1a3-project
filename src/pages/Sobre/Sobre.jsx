import './Sobre.css'

const Sobre = () => {
  return (
    <div className="about">
      <h1>Sobre o projeto</h1>
      <p>
        Esse site é uma conversão do meu projeto de Desenvolvimento Web I
        do IFSP, onde os requisitos seria de criar pelo menos 4 páginas web
        além de persistir dados no localStorage.
      </p>
      <p>
        Porém, dessa vez, resolvi converter toda o código que tinha feito para
        ReactJS, além de fazer a responsividade e melhorar o design do site.
      </p>
      <p>O site contém 6 páginas entre elas 2 Dinâmicas, 3 com formulários e 1 estática
        Foi usado, router dom para Links de navegação, useStates para alterar elementos da
        página, além de contexto de usuários. Os dados foram persistidos no localStorage, e
        foi usado css vanilla com resposividade, entretanto, sem nenhum framework.
      </p>
    </div>
  )
}

export default Sobre