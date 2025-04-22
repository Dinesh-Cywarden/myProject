import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SendHorizonal, Bot, User } from "lucide-react";

export default function AIChatbotDemo() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { role: "user", content: input },
      { role: "bot", content: "Let me think... 🤔" } // placeholder for AI response
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-slate-700 mb-4"
      >
        AI Chatbot Demo
      </motion.div>

      <div className="flex-1 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ x: msg.role === "bot" ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start space-x-2 ${
                msg.role === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              {msg.role === "bot" && <Bot className="text-blue-500 mt-1" size={20} />}
              <div className={`max-w-xs p-3 rounded-xl text-sm shadow-md ${
                msg.role === "bot" ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900"
              }`}>
                {msg.content}
              </div>
              {msg.role === "user" && <User className="text-green-500 mt-1" size={20} />}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-4 bg-slate-50 flex items-center gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition flex items-center justify-center"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
