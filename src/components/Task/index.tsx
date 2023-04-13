import { useId } from 'react'
import { Trash } from '@phosphor-icons/react'

import S from './styles.module.css'

export interface TaskProps {
  id: string
  title: string
  completed: boolean
}

interface TaskContentProps {
  content: TaskProps
}

function Task({ content }: TaskContentProps) {
  const uniqueIdPerTask = useId();

  const taskIsChecked = content.completed

  return (
    <div className={S.task}>
      <form>
        <label
          htmlFor={uniqueIdPerTask}
          className={taskIsChecked ? `${S.done}` : ''}
        >
          <input
            id={uniqueIdPerTask}
            className="sr-only"
            type="checkbox"
            defaultChecked={taskIsChecked}
          />
          <p>{content.title}</p>
        </label>
      </form>

      <button title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  )
}

export default Task
