import { useId } from 'react'
import { Trash } from '@phosphor-icons/react'

import S from './styles.module.css'

function Task() {
  const uniqueIdPerTask = useId();

  return (
    <div className={S.task}>
      <form>
        <label htmlFor={uniqueIdPerTask}>
          <input
            id={uniqueIdPerTask}
            className="sr-only"
            type="checkbox"
          />
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
