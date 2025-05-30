
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(message.toLowerCase());
    addMessage("bot", reply);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  if (message.includes("halo") || message.includes("hai")) {
    return "Hai juga! Ada yang bisa aku bantu?";
  }
  if (message.includes("siapa kamu")) {
    return "Aku adalah ChatBot mile, teman ngobrol kamu! 😊";
  }
  if (message.includes("apa itu chatbot")) {
    return "ChatBot adalah program yang bisa baku tanya jawab seperti dengan manusia.";
  }
  if (message.includes("siapa itu yamile")) {
    return "Yamile itu seorang developert dan designer pemula yang sedang disiapkan.";
  }
  if (message.includes("terima kasih")) {
    return "Sama-sama! Senang bisa bantu.";
  }
  
  return "Maaf, aku belum mengerti. Coba tanya hal lain ya!";
}
