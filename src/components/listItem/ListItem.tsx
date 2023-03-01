import { FC, useState } from 'react'
import Modal from '../modal/Modal'

import styles from "./ListItem.module.scss"

type Props = {
   id: number,
   title: string,
   description: string,
   status: boolean
}
const ListItem: FC<Props> = ({ id, title, description, status }) => {
   const [checked, setChecked] = useState<boolean>(status)
   const [showModal, setShowModal] = useState<boolean>(false)

   return (
      <div className={styles.list_item}>
         <div
            className={styles.content}
            onClick={() => setShowModal(true)}
         >
            <div>{id}</div>
            <div>{title}</div>
            <div>{description}</div>
         </div>
         <div>
            <input
               type="checkbox"
               checked={checked ? checked : false}
               onChange={() => setChecked(!checked)}
            />
         </div>

         {showModal &&
            <Modal
               showModal={showModal}
               setShowModal={setShowModal}
               title={title}
               description={description}
               checked={checked}
               setChecked={setChecked}
            />}
      </div>
   )
}

export default ListItem