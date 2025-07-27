document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("chatbot-popup");
  const toggle = document.getElementById("chatbot-toggle");
  const close = document.getElementById("chatbot-close-btn");
  const input = document.getElementById("chatbot-user-input");
  const sendBtn = document.getElementById("chatbot-send-btn");
  const messages = document.getElementById("chatbot-messages");

  const addMessage = (text, isBot = true) => {
    const msg = document.createElement("div");
    msg.className = `message-bubble ${isBot ? "bot" : "user"} bg-[#2a2a40] p-2 rounded-lg max-w-[85%]`;
    msg.innerHTML = `<div class="bubble-text">${text}</div>`;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  };

  const respondTo = (inputText) => {
    const text = inputText.toLowerCase();

    if (text.match(/(resume|cv|download)/)) {
      addMessage(`📄 You can download my resume here: <a href="/resume_muktha.pdf" download class="text-purple-400 underline">Click to Download</a>`);
    } else if (text.match(/(project|work|portfolio)/)) {
      addMessage("📁 Sure! Navigating to my Projects...");
      window.location.hash = "#projects";
    } else if (text.match(/(contact|email|reach)/)) {
      addMessage("📞 Bringing you to the contact section...");
      window.location.hash = "#contact";
    } else if (text.match(/(hello|hi|hey)/)) {
      addMessage("👋 Hello! I'm MukthaBot. Ask me about my projects, resume, or how to contact me.");
    } else {
      addMessage("🤖 Sorry, I didn’t understand that. Try asking about my resume, projects, or contact info.");
    }
  };

  sendBtn.addEventListener("click", () => {
    const userText = input.value.trim();
    if (!userText) return;
    addMessage(userText, false);
    respondTo(userText);
    input.value = "";
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });

  toggle.addEventListener("click", () => {
    popup.classList.toggle("chatbot-hidden");
  });

  close.addEventListener("click", () => {
    popup.classList.add("chatbot-hidden");
  });
});
