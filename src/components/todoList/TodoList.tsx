import ListItem from '../listItem/ListItem'

import styles from "./TodoList.module.scss"

type Item = {
   id: number,
   title: string,
   description: string,
   status: boolean
}

const TodoList = ({ todoList }: any) => {
   return (
      <div className={styles.todo_list}>
         <div className={styles.list_header}>
            <div>id</div>
            <div>title</div>
            <div>description</div>
            <div>status</div>
         </div>

         <div className={styles.list_content}>
            {todoList &&
               todoList.map((item: Item) => <ListItem key={item.id} {...item} />)
            }
         </div>
      </div>
   )
}

export default TodoList