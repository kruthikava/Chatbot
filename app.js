import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setChatLog(prevChatLog => [...prevChatLog, { message, sender: 'user' }]);
      setMessage('');

      // Send message to chatbot API for processing
      // You can use AJAX, fetch, or any other method to send the message

      // Assuming you receive a response from the chatbot API
      const response = 'Response from the chatbot';
      setChatLog(prevChatLog => [...prevChatLog, { message: response, sender: 'chatbot' }]);
    }
  };

  return (
    <div id="chatContainer">
      <div id="chatLog">
        {chatLog.map((entry, index) => (
          <div key={index} className={entry.sender}>
            {entry.sender === 'user' ? (
              <strong>User:</strong>
            ) : (
              <strong>Chatbot:</strong>
            )}
            {entry.message}
          </div>
        ))}
      </div>
      <div id="userInput">
        <input
          type="text"
          value={message}
          onChange={event => setMessage(event.target.value)}
          placeholder="Ask your question..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
