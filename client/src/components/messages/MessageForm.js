import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Container, Card} from 'react-bootstrap';


const MessageForm = ({ addMessage, id, name, email, newmessage, updateMessage, setEdit }) => {
  const [message, setMessage] = useState({ name: '', email: '', newmessage: '' })

  useEffect( () => {
    if (id) {
      setMessage({ name, email, newmessage })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateMessage(id, message)
      setEdit(false)
    } else {
    addMessage(message);
    }
    setMessage({ name: '', email: '', newmessage: '' })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          name="name"
          value={message.name}
          onChange={(e) => setMessage({ ...message, name: e.target.value })}
          placeholder="Name"
          required
        />

        <input
          name="email"
          value={message.email}
          onChange={(e) => setMessage({ ...message, email: e.target.value })}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={message.newmessage}
          onChange={(e) => setMessage({ ...message, newmessage: e.target.value })}
          placeholder="Message"
          required
        >
        </textarea>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default MessageForm;