import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'

import Header from '@/components/Header'
import Task, { TaskProps } from '@/components/Task'
import Empty from '@/components/Empty'

import S from '@/App.module.css'
import './global.css'

const tasks: TaskProps[] = [
  {
    id: uuidv4(),
    title: "#1 - Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false
  },
  {
    id: uuidv4(),
    title: "#2 - Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false
  },
  {
    id: uuidv4(),
    title: "#3 - Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: false
  },
  {
    id: uuidv4(),
    title: "#4 - Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: true
  },
  {
    id: uuidv4(),
    title: "#5 - Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    completed: true
  }
]

function App() {

  return (
    <>
      <Header />
      <main className={S.container}>
        <form className={S.form}>
          <div className={S.group_input}>
            <label
              htmlFor="new_task"
              className="sr-only"
            >
              Adicione uma nova tarefa
            </label>
            <input
              id="new_task"
              type="text"
              placeholder="Adicione uma nova tarefa"
            />
          </div>
          <button type="submit">
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </form>

        <section>
          <div className={S.info}>
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </div>

          {tasks.map((task) => (
            <Task
              key={task.id}
              content={task}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
