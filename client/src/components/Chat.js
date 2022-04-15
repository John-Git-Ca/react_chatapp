import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Chat.css';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = () => {
  const { name, room } = useParams();

  const [editMessage, setEditMessage] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    'hello',
    'theretheretheretherethere',
    'there2there3th  ere3there3there3th ere3there3th ere3the re3there3t here3 there3there3 ere3there3there 3there3',
    'there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3there3',
    'theretheretheretherethere',
    'theretheretheretherethere',
    'theretheretheretherethere',
    'theretheretheretherethere',
    'theretheretheretherethere',
    'theretheretheretherethere',
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(editMessage);
    setEditMessage('');
  };

  return (
    <>
      <Row className="justify-content-center pt-4 m-0">
        <Col xs={1} sm={11} md={8} xl={6} className="chatarea">
          <Row xs={8} sm={6} className="border infobar">
            <span className="text-center">Room: {room}</span>
            <span className="text-center">2</span>
          </Row>
          <ScrollToBottom className="messages">
            {messages.map((msg, index) => (
              <Message key={index} msg={msg} />
            ))}
          </ScrollToBottom>
          <Row className="edit">
            <textarea
              className="text"
              value={editMessage}
              onChange={(e) => setEditMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e)}
            ></textarea>
            <Button className="sendbtn" onClick={handleSendMessage}>
              Send
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Chat;
