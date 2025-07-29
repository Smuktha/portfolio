'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Sun, Moon, X, Send } from 'lucide-react';
import Image from 'next/image';

const options = [
  'View my Projects',
  'Show my Resume',
  'Contact Me',
  'Visit my Blogs',
  'See Freelance Work',
  'View Certificates',
  'Explore Tech Stack',
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState([
    {
      text: `Hey, I'm <strong>MukthaBot</strong> 🤖<br/>How can I assist you today?`,
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const scrollToShowcaseAndSwitchTab = (tabKey) => {
    if (pathname !== '/') {
      router.push(`/?tab=${tabKey.toLowerCase()}`);
    } else {
      document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('switchShowcaseTab', { detail: tabKey }));
    }
  };

  const handleInputCommand = (inputText) => {
    const text = inputText.toLowerCase();

    if (['hi', 'hello', 'hii', 'hey', 'hola'].some((greet) => text.includes(greet))) {
      return `Hello there! 👋 I'm <strong>MukthaBot</strong>. How can I help you today? 😊`;
    }

    if (text.includes('project')) {
      scrollToShowcaseAndSwitchTab('projects');
      return `Sure! Showing your <strong>Projects</strong> 🚀`;
    }
    if (text.includes('resume')) {
      window.open('/resume_muktha.pdf', '_blank');
      return `Opening your <strong>Resume</strong> 📄`;
    }
    if (text.includes('contact')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return `Let's <strong>Contact</strong> you 📬`;
    }
    if (text.includes('blog')) {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
      return `Heading to your <strong>Blogs</strong> ✍️`;
    }
    if (text.includes('freelance')) {
      router.push('/freelance');
      return `Opening your <strong>Freelance Work</strong> 💼`;
    }
    if (text.includes('certificate')) {
      scrollToShowcaseAndSwitchTab('certificates');
      return `Here are your <strong>Certificates</strong> 📜`;
    }
    if (text.includes('tech')) {
      scrollToShowcaseAndSwitchTab('techstack');
      return `Here's your <strong>Tech Stack</strong> 🔧`;
    }

    return `Sorry, I didn't understand that. Please try again or use the options below.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const botReply = handleInputCommand(userText);

    setMessages((prev) => [
      ...prev,
      { text: userText, isBot: false },
      { text: botReply, isBot: true },
    ]);

    setInput('');
  };

  const handleOptionClick = (text) => {
    const userMsg = { text, isBot: false };
    let botMsg;

    switch (text) {
      case 'View my Projects':
        scrollToShowcaseAndSwitchTab('projects');
        botMsg = { text: `Sure! Here's your <strong>Projects</strong> 🚀`, isBot: true };
        break;

      case 'Show my Resume':
        window.open('/resume_muktha.pdf', '_blank');
        botMsg = { text: `Opening your <strong>Resume</strong> 📄`, isBot: true };
        break;

      case 'Contact Me':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        botMsg = { text: `Let's <strong>Contact</strong> you 📬`, isBot: true };
        break;

      case 'Visit my Blogs':
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
        botMsg = { text: `Heading to your <strong>Blogs</strong> ✍️`, isBot: true };
        break;

      case 'See Freelance Work':
        router.push('/freelance');
        botMsg = { text: `Opening your <strong>Freelance Work</strong> 💼`, isBot: true };
        break;

      case 'View Certificates':
        scrollToShowcaseAndSwitchTab('certificates');
        botMsg = { text: `Here are your <strong>Certificates</strong> 📜`, isBot: true };
        break;

      case 'Explore Tech Stack':
        scrollToShowcaseAndSwitchTab('techstack');
        botMsg = { text: `Here's your <strong>Tech Stack</strong> 🔧`, isBot: true };
        break;

      default:
        botMsg = { text: `Hmm, I don't know that yet!`, isBot: true };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const isDark = darkMode;
  const bgColor = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-black';
  const borderColor = isDark ? 'border-[#2a2a40]' : 'border-gray-300';
  const inputBg = isDark ? 'bg-[#13133b]' : 'bg-gray-100';
  const inputText = isDark ? 'text-white' : 'text-black';
  const optionBg = isDark ? 'bg-[#13133b]' : 'bg-gray-200';
  const optionText = isDark ? 'text-white' : 'text-black';
  const optionHover = isDark ? 'hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]' : 'hover:shadow-md';

  return (
    <>
      {/* Bot Button with animation */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg"
        >
          {isOpen ? (
            <X />
          ) : (
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/chatbot/chat.png"
                alt="Bot"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 60 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 right-6 w-96 max-w-[90vw] z-50 ${bgColor} ${textColor} ${borderColor} border rounded-xl shadow-xl`}
          >
            <div className={`flex items-center justify-between p-4 border-b ${borderColor}`}>
              <h2 className="text-lg font-semibold">MukthaBot 🤖</h2>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun className="text-yellow-400" /> : <Moon />}
              </button>
            </div>

            <div ref={chatRef} className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`px-4 py-3 rounded-xl text-sm font-medium max-w-[85%] whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-[#13133b] border border-[#2a2a40] text-white shadow'
                        : 'bg-indigo-600 text-white'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </div>
              ))}
            </div>

            <div className={`flex items-center p-4 border-t ${borderColor}`}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className={`flex-grow px-3 py-2 rounded-md ${inputBg} ${inputText} border ${borderColor} outline-none`}
              />
              <button
                onClick={handleSend}
                className="ml-2 text-indigo-400 hover:text-indigo-300"
              >
                <Send size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 p-4">
              {options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className={`${optionBg} ${optionText} border ${borderColor} text-xs px-3 py-2 rounded-lg hover:scale-105 transition-all shadow ${optionHover}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
