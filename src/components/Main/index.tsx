import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'

import Task, { TaskProps } from '@/components/Task'
import Empty from '@/components/Empty'

import S from './styles.module.css'

const Main = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskValue, setTaskValue] = useState('')

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault()

    const createNewTask: TaskProps = {
      id: uuidv4(),
      title: taskValue,
      completed: false,
    }

    setTasks([...tasks, createNewTask])
    setTaskValue('')
  }

  function handleUpdateTask(id: string) {
    const update = tasks.map(function(prevTask) {
      const invertBooleanIsTaskCompleted = prevTask.id === id ? !prevTask.completed : prevTask.completed

      const task = {
        id: prevTask.id,
        title: prevTask.title,
        completed: invertBooleanIsTaskCompleted
      }

      return task
    })

    setTasks(update)
  }

  function handleDeleteTask(id: string) {
    const deletingTaskFromTasks = tasks.filter((task) => task.id !== id)

    setTasks([...deletingTaskFromTasks])
  }

  function handleChangeTaskValue(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskValue(event.target.value)
  }

  function handleInvalidTaskValue(event: React.InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const disableSubmitIfTaskIsEmpty = !taskValue

  const totalTasksCreated = tasks.length

  const totalTasksCompleted = tasks.filter((task) => task.completed).length

  return (
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
            {!totalTasksCreated && <span>{totalTasksCreated}</span>}
            {!!totalTasksCreated && <span>{totalTasksCompleted} de {totalTasksCreated}</span>}
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
  )
}

export default Main
