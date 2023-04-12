import logoRocket from '@/assets/rocket.svg'

import S from './styles.module.css'

function Header() {
  return (
    <header className={S.header}>
      <div className={S.container}>
        <img
          src={logoRocket}
          alt="Icone de um foguete decolando"
          loading="lazy"
        />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
