import { Trash } from '@phosphor-icons/react'

import S from './styles.module.css'

const Task = () => {
  return (
    <div className={S.task}>
      <form>
        <label>
          <input type="radio" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </label>
      </form>

      <button title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  )
}

export default Task
