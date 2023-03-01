import { FC, ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

import styles from "./Form.module.scss"

type Props = {
   addTodo: (obj: Item) => void,
   id: number
}

type Item = {
   id: number,
   title: string,
   description: string,
   status: boolean
}

const Form: FC<Props> = ({ addTodo, id }) => {
   const [titleEmpty, setTitleEmpty] = useState<boolean>(false)
   const [descrEmpty, setDescrEmpty] = useState<boolean>(false)

   const [titleValue, setTitleValue] = useState<string>("")
   const [descrValue, setDescrValue] = useState<string>("")

   const titleRef = useRef<HTMLInputElement>(null)
   const descrRef = useRef<HTMLInputElement>(null)

   //! Для валыдації форми можна використати якесь готове рішення, 
   //! проте я вирішив написати без сторонніх модулів
   useEffect(() => {
      const handleInputClick = (e: any) => {
         const path = e.composedPath()

         if (path.includes(titleRef.current)) {
            setTitleEmpty(false)
         }
      }
      document.body.addEventListener("click", handleInputClick)

      return () => document.body.removeEventListener("click", handleInputClick)
   }, [])

   useEffect(() => {
      const handleInputClick = (e: any) => {
         const path = e.composedPath()

         if (path.includes(descrRef.current)) {
            setDescrEmpty(false)
         }
      }
      document.body.addEventListener("click", handleInputClick)

      return () => document.body.removeEventListener("click", handleInputClick)
   }, [])

   const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setTitleValue(e.target.value)
   }

   const onChangeDescr = (e: ChangeEvent<HTMLInputElement>) => {
      setDescrValue(e.target.value)
   }

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!titleValue || !descrValue) {
         if (!titleValue) {
            setTitleEmpty(true)
         } else {
            setDescrEmpty(true)
         }
         return
      }

      const obj = {
         id: id + 1,
         title: titleValue,
         description: descrValue,
         status: false
      }

      addTodo(obj)

      setTitleValue("")
      setDescrValue("")
   }

   return (
      <form
         className={styles.form}
         onSubmit={submitHandler}
      >
         <div className={styles.input_wrap}>
            <span>Title:</span>
            <input
               ref={titleRef}
               value={titleValue}
               onChange={onChangeTitle}
               className={titleEmpty ? styles.empty : ""}
               placeholder="Enter title..."
            />

            {titleEmpty && <div className={styles.empty_label}>This field is empty</div>}
         </div>

         <div className={styles.input_wrap}>
            <span>Description:</span>
            <input
               ref={descrRef}
               value={descrValue}
               onChange={onChangeDescr}
               className={descrEmpty ? styles.empty : ""}
               placeholder="Enter description..."
            />

            {descrEmpty && <div className={styles.empty_label}>This field is empty</div>}
         </div>

         <button>Create</button>
      </form>
   )
}

export default Form