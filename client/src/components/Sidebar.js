import React, { useState } from 'react'
import {Tab,Nav,Button,Modal} from'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({id}) {
    const [activeKey,setActiveKey] = useState(CONVERSATIONS_KEY);
    const conversationsOpen= activeKey ===CONVERSATIONS_KEY;
    const [modalOpen,setModalOpen] = useState(false)

    function modalClose(){
        setModalOpen(false)
    }
  return (
    <div style={{width:'20rem'}} className='d-flex flex-column sidebar'>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant='tabs' className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link className='headings-bold' eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='headings-bold' eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className='border-right overflow-auto flex-grow-1'>
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations></Conversations>
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts></Contacts>
                </Tab.Pane>
            </Tab.Content>
            <div className='p-2 border-top boredr-right small id_name'>Your ID : <span className='id_name_span'>{id}</span> </div>
            <Button onClick={()=>setModalOpen(true)} className='new-buttons headings-bold'>New {conversationsOpen ? 'Conversation' :'Contact'}</Button>
        </Tab.Container>
        <Modal show={modalOpen} onHide={modalClose}>
            {conversationsOpen ? <NewConversationModal modalClose={modalClose}/> : 
            <NewContactModal modalClose={modalClose}/>}
        </Modal>
    </div>
  )
}
