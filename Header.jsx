import React, { useState } from 'react'
import { Modal,  Switch,  Form, Input, Select ,  Collapse,  message,  FormInstance, Row, Space, Tag } from 'antd';

export const Header = () => {

  const [modal, setModal,] = useState(false)

  return (
    <div className="header">
        
        <h1>Todos list</h1>
        {/* <button onClick={()=>setModal(true)} className="btn btn-lg ">Build Custom Funnels</button>
  <Modal width={1200}  title="Add New" open={modal} onCancel={()=>setModal(!modal)}>
      <h1>ook</h1>      
      
      </Modal> */}
    </div>
  )
}


export default Header;