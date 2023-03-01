import { FC, useState } from 'react'
import Form from '../components/form/Form'
import TodoList from '../components/todoList/TodoList'

import "../scss/index.scss"

interface Item {
   id: number,
   title: string,
   description: string,
   status: boolean
}

const Home: FC = () => {
   const [todoList, setTodoList] = useState<Item[]>([])

   const addTodo = (obj: Item) => {
      const newList = [...todoList, obj]

      setTodoList(newList)
   }

   return (
      <div className="wrapper">
         <Form addTodo={addTodo} id={todoList.length} />
         <TodoList todoList={todoList} />
      </div>
   )
}

export default Home