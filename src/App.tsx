import { PlusCircle } from '@phosphor-icons/react'

import Header from '@/components/Header'

import S from '@/app.module.css'
import './global.css'

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
          <div>...header</div>
          <div>...tasks</div>
        </section>
      </main>
    </>
  )
}

export default App
