import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import Header from '@/components/Header'
import Task from '@/components/Task'
import Empty from '@/components/Empty'

import S from '@/App.module.css'
import './global.css'


function App() {
  const [tasks, setTasks] = useState([])

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

          {!tasks.length && (
            <Empty />
          )}
        </section>
      </main>
    </>
  )
}

export default App
