import { useState } from 'react';
import MessageForm from './MessageForm';
import { Button, Card } from "react-bootstrap"

const Message = ({ setAdd, id, name, email, message, updateMessage, deleteMessage }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>{ name }</h1>
      { editing ?
        <>
          <MessageForm 
            setAdd={setAdd}
            id={id}
            message={message}
            name={name}
            email={email}
            updateMessage={updateMessage}
            setEdit={setEdit}
          />
          <Button 
            onClick={() => setEdit(false)} 
          >
            Cancel
          </Button>
        </>
        :
        <Button 
          onClick={() => setEdit(true)} 
        >
          Edit
        </Button>
      }
      <Button 
        onClick={() => deleteMessage(id)} 
      >
        Delete
      </Button>
    </>
  )
}

export default Message;
