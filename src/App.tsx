import { PlusCircle } from '@phosphor-icons/react'

import Header from '@/components/Header'
import Task from '@/components/Task'

import S from '@/app.module.css'
import './global.css'

const tasks = [1, 2, 3, 4, 5]

function App() {

  return (
    <>
      <Header />
      <main className={S.container}>
        <form className={S.form}>
          <div className={S.group_input}>
            <label
              htmlFor="task"
              className="sr-only"
            >
              Adicione uma nova tarefa
            </label>
            <input
              id="task"
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

          {tasks.map(() => (
            <Task />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
