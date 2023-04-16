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
  onDeleteTask: (id: string) => void
  onUpdateTask: (id: string) => void
}

const Task = ({
  content,
  onDeleteTask,
  onUpdateTask
}: TaskContentProps) => {
  const uniqueIdPerTask = useId()

  function handleDeleteTask() {
    onDeleteTask(content.id)
  }

  function handleUpdateTask() {
    onUpdateTask(content.id)
  }

  const taskIsChecked = content.completed

  return (
    <div className={S.task}>
      <label
        htmlFor={uniqueIdPerTask}
        className={taskIsChecked ? `${S.done}` : ''}
        onClick={handleUpdateTask}
      >
        <input
          id={uniqueIdPerTask}
          className="sr-only"
          type="checkbox"
          defaultChecked={taskIsChecked}
        />
        <p>{content.title}</p>
      </label>

      <button
        title="Deletar tarefa"
        onClick={handleDeleteTask}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}

export default Task
