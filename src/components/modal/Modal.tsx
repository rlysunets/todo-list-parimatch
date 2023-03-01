import { FC } from 'react'

import styles from "./Modal.module.scss"

type Props = {
   showModal: boolean,
   setShowModal: (val: boolean) => void,
   title: string,
   description: string,
   checked: boolean,
   setChecked: (val: boolean) => void
}

const Modal: FC<Props> = ({ showModal, setShowModal, title, description, checked, setChecked }) => {
   return (
      <>
         {showModal &&
            <div className={styles.wrapper}>
               <div className={styles.content}>
                  <h2>{title}</h2>
                  <h3>Description:</h3>
                  <div className={styles.description}>{description}</div>
                  <div className={styles.status}>
                     <h3>Status:</h3>
                     <input
                        type="checkbox"
                        defaultChecked={checked}
                        onChange={() => setChecked(!checked)}
                     />
                  </div>
                  <button onClick={() => setShowModal(false)}>close</button>
               </div>
            </div>}
      </>
   )
}

export default Modal