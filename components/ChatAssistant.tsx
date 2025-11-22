import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, ChevronRight, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "System initialized. I am the portfolio assistant. How may I query the database for you?" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newHistory: ChatMessage[] = [
      ...messages,
      { role: 'user', text: userMessage }
    ];
    
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(newHistory, userMessage);
      
      setMessages(prev => [
        ...prev,
        { role: 'model', text: responseText }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'model', text: "Error: Connection failed. Retrying..." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 p-3 bg-black border border-neutral-700 text-white shadow-2xl z-50 hover:bg-neutral-900 transition-all ${
          isOpen ? 'hidden' : 'block'
        }`}
        aria-label="Open Terminal"
      >
        <Terminal size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-8 right-8 w-80 sm:w-96 bg-black border border-neutral-700 shadow-2xl z-50 transition-all duration-300 origin-bottom-right flex flex-col font-mono-code text-sm ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="p-2 bg-neutral-900 border-b border-neutral-700 flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(false)}>
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-green-500" />
            <span className="text-neutral-300">bash --login</span>
          </div>
          <button className="text-neutral-400 hover:text-white">
            <Minimize2 size={14} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/95 scrollbar-thin scrollbar-thumb-neutral-800">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex flex-col">
               <div className={`flex items-baseline gap-2 mb-1 ${msg.role === 'user' ? 'text-blue-400' : 'text-green-500'}`}>
                   <span>{msg.role === 'user' ? 'visitor@portfolio:~$' : 'system@ai:~#'}</span>
               </div>
               <div className="text-neutral-300 whitespace-pre-wrap pl-0 leading-relaxed font-mono-code">
                 {msg.text}
               </div>
            </div>
          ))}
          
          {isLoading && (
             <div className="text-neutral-500 animate-pulse">Processing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-2 bg-black border-t border-neutral-800">
          <div className="flex items-center gap-2">
            <ChevronRight size={16} className="text-neutral-500" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="w-full bg-transparent text-white border-none outline-none placeholder:text-neutral-700 font-mono-code text-sm"
              autoFocus={isOpen}
            />
          </div>
        </form>
      </div>
    </>
  );
};