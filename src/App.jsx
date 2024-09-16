import './App.css'
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add the user's message to the messages list
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Simulate chatbot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Hello! How can I assist you?' },
      ]);
    }, 1000);
  };
  return (
    <>
      <div className=" bg-[#fffefe] h-screen w-screen">
        <h1 className=" text-center font-bold text-3xl" >STORYVORD</h1>
        <div className='  fixed bottom-10 right-10  text-center text-white font-bold'>
          {/* Floating button */}
          <button onClick={toggleChat} 
          className={`${
            isChatOpen ? 'hidden' : 'block'
          } bg-gradient-to-r from-[#04286C] to-[#21BF5F] text-white rounded-lg w-40 h-20 shadow-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-110`}
        >
          Any queries?
        </button>
        </div>
        {/* Chatbox */}
        <div
          className={`${
            isChatOpen ? 'block' : 'hidden'
          } fixed bottom-20 right-4 bg-white w-2/6 h-4/6 rounded-lg shadow-2xl flex flex-col transition-all transform ${
            isChatOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-[#04286C] to-[#21BF5F] text-white p-4 rounded-t-lg">
            <h3 className=' font-semibold'>Ask your queries to our AI Bot</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Chat window */}
          <div className=" -z-20 flex-1 p-4 overflow-y-auto bg-[url('sv-logo.png')] bg-center bg-no-repeat bg-opacity-20">
            {/* Background blur */}
          <div className=" -z-10 absolute inset-0 backdrop-blur-sm"></div>
            {/* Messages*/}
            {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-white ${
                message.sender === 'user' ? 'bg-[#21BF5F]' : 'bg-[#04286C]'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-gray-100 flex">
            <input
              type="text"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#21BF5F]"
              placeholder="Ask your query here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}

            />
            <button
            onClick={handleSendMessage}
              className="ml-2 px-6 py-2 bg-gradient-to-r from-[#04286C] to-[#21BF5F] text-white rounded-lg hover:text-slate-300"
            >
              &#11166;
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
