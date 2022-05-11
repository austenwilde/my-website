import { useState, useEffect } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect( () => {
    // TODO make a call to our rails server to get Lists
  }, [])

  const addMessage = (message) => {
    // TODO make api call to rails server to add Message
    // TODO update state
  }

  const updateMessage = (id, message) => {
    // TODO make api call to update Message
    // TODO update state
  }

  const deleteMessage = (id) => {
    // TODO make api call to delete Message
    // TODO remove it from state
  }

  return (
    <>
      <MessageForm addMessage={addMessage} />
      <br />
      <br />
      <MessageList
        messages={messages}
        updateMessage={updateMessage}
        deleteMessage={deleteMessage}
      />
    </>
  );
}

export default Messages;