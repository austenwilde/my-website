import React from 'react';
import Message from './Message';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MessageList = ({ messages, updateMessage, getAllMessages, deleteMessage }) => {
  const { messageId } = useParams()
  // const [show, setShow] = useState(false);

  useEffect( () => {
    getAllMessages(messageId)
  }, [])
  
  return (
  <>
    { messages.map( m => 
        <Message
          key={m.id}
          {...m}
          updateMessage={updateMessage}
          deleteMessage={deleteMessage}
        />
      )
    }
  </>
  )
}

export default MessageList;
