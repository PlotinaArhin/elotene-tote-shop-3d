
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your Eloténe assistant. I can help you learn about our sustainable tote bags, answer questions about our products, or assist with your shopping experience. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    greeting: [
      "Hello! Welcome to Eloténe. How can I assist you with our sustainable tote bags today?",
      "Hi there! I'm here to help you find the perfect eco-friendly tote bag. What would you like to know?",
      "Welcome to Eloténe! I'd love to help you explore our collection of premium tote bags."
    ],
    products: [
      "We offer 6 amazing tote bags including our Classic Canvas Tote (₵49.99), Premium Leather Tote (₵89.99), and Eco-Friendly Jute Bag (₵34.99). Each bag is crafted with sustainable materials and designed to last. Would you like details about any specific bag?",
      "Our collection features sustainable tote bags ranging from ₵34.99 to ₵89.99. We have canvas, leather, jute, and designer options. All are made with eco-friendly materials. What style interests you most?"
    ],
    sustainability: [
      "Sustainability is at the heart of everything we do! We use eco-friendly materials, work with ethical suppliers, and ensure our production methods minimize environmental impact. Our bags are built to last, reducing waste over time.",
      "Great question! All Eloténe bags are made from sustainable materials like organic cotton, recycled materials, and ethically-sourced leather. We're committed to protecting our planet while creating beautiful, functional bags."
    ],
    shipping: [
      "We offer fast and reliable shipping! Standard delivery takes 3-5 business days, and we also offer express shipping for faster delivery. All orders come with tracking information so you can monitor your package.",
      "Shipping is quick and easy! We process orders within 24 hours and provide tracking details. Standard shipping is 3-5 days, with express options available for urgent orders."
    ],
    about: [
      "Eloténe was founded in 2020 with a mission to create sustainable, stylish tote bags. We believe in quality materials, timeless designs, and ethical production. Our team is passionate about environmental stewardship and creating products that last.",
      "We're a sustainability-focused company that creates premium tote bags. Founded on values of quality, eco-friendliness, and ethical business practices, we work with artisans who share our commitment to the environment."
    ],
    default: [
      "I'd be happy to help! You can ask me about our products, sustainability practices, shipping, or anything else about Eloténe. What would you like to know?",
      "I'm here to assist with any questions about our tote bags, company, or shopping experience. Feel free to ask me anything!",
      "Thanks for your question! I can help with product information, company details, shipping, or general inquiries. What specific information are you looking for?"
    ]
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)];
    }
    
    if (message.includes('product') || message.includes('bag') || message.includes('tote') || message.includes('price') || message.includes('cost')) {
      return predefinedResponses.products[Math.floor(Math.random() * predefinedResponses.products.length)];
    }
    
    if (message.includes('sustainable') || message.includes('eco') || message.includes('environment') || message.includes('green')) {
      return predefinedResponses.sustainability[Math.floor(Math.random() * predefinedResponses.sustainability.length)];
    }
    
    if (message.includes('shipping') || message.includes('delivery') || message.includes('ship')) {
      return predefinedResponses.shipping[Math.floor(Math.random() * predefinedResponses.shipping.length)];
    }
    
    if (message.includes('about') || message.includes('company') || message.includes('story') || message.includes('elotene') || message.includes('eloténe')) {
      return predefinedResponses.about[Math.floor(Math.random() * predefinedResponses.about.length)];
    }
    
    return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-110 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Eloténe Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about our tote bags!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
