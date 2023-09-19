import {Modal} from "../Modal";
import { useState } from "react";

const Statistics = () => {
const [openModal, setOpenModal] = useState(false);

  return(
    <>
    <h1>Statistics page</h1>
    <button onClick = {() => setOpenModal(true)}>Open</button>
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <div>Im in Portal</div>
      <button onClick = {() => setOpenModal(false )}>Close</button>
    </Modal>
    </>
  )
}

export default Statistics;