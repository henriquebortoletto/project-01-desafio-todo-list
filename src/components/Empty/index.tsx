import { ClipboardText } from '@phosphor-icons/react'

import S from './styles.module.css'

const Empty = () => {
  return (
    <div className={S.container}>
      <div className={S.info}>
        <ClipboardText size={56} />
        <p>
          <span>Você ainda não tem tarefas cadastradas</span>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}

export default Empty
