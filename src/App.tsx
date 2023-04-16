import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'

import Header from '@/components/Header'
import Task, { TaskProps } from '@/components/Task'
import Empty from '@/components/Empty'

import S from '@/App.module.css'
import './global.css'

const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskValue, setTaskValue] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newState: TaskProps = {
      id: uuidv4(),
      title: taskValue,
      completed: false,
    }

    setTasks([...tasks, newState])
    setTaskValue('')
  }

  function handleUpdateTask(id: string) {
    console.log("*** handleUpdateTask", id)
  }

  function handleDeleteTask(id: string) {
    const deletingTaskFromTasks = tasks.filter((task) => task.id !== id)

    setTasks([...deletingTaskFromTasks])
  }

  function handleChangeTaskValue(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskValue(event.target.value)
  }

  function handleInvalidTaskValue(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const disableSubmitIfTaskIsEmpty = !taskValue

  const totalTasksCreated = tasks.length
  const totalTasksCompleted = tasks.filter((task) => task.completed).length

  return (
    <>
      <Header />
      <main className={S.container}>
        <form
          className={S.form}
          onSubmit={handleCreateNewTask}
        >
          <div className={S.group_input}>
            <label
              htmlFor="task"
              className="sr-only"
            >
              Adicione uma nova tarefa
            </label>
            <input
              id="task"
              name="task"
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={taskValue}
              onChange={handleChangeTaskValue}
              onInvalid={handleInvalidTaskValue}
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            disabled={disableSubmitIfTaskIsEmpty}
          >
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </form>

        <section>
          <div className={S.info}>
            <div>
              <p>Tarefas criadas</p>
              <span>{totalTasksCreated}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>{totalTasksCompleted} de {totalTasksCreated}</span>
            </div>
          </div>

          {!tasks.length && (
            <Empty />
          )}

          {!!tasks.length && (
            tasks.map((task) => (
              <Task
                key={task.id}
                content={task}
                onDeleteTask={handleDeleteTask}
                onUpdateTask={handleUpdateTask}
              />
            ))
          )}
        </section>
      </main>
    </>
  )
}

export default App
