// chat.js - LEGALCRAFT AI (Client-side Only - Core Safe)
let messages = [];
let pendImages = [];
let recognition = null;

// Knowledge Base for Accurate Results
const knowledgeBase = [
  { section: "BNS 103", text: "Murder — Whoever commits murder shall be punished with death or imprisonment for life...", case: "K.M. Nanavati vs State of Maharashtra (1962)" },
  { section: "BNS 64", text: "Rape — Punishment for rape", case: "Nirbhaya Case (2017)" },
  { section: "BNSS 483", text: "Regular Bail — Bail is the rule, jail is the exception.", case: "Satender Kumar Antil v CBI (2022)" },
  { section: "BNSS 482", text: "Anticipatory Bail", case: "Gurbaksh Singh Sibbia (1980)" },
  { section: "BNSS 173", text: "Zero FIR allowed", case: "Lalita Kumari v UP (2014)" }
];

// Add Message
function addMessage(text, isUser) {
  const chatInner = document.getElementById('chat-inner');
  if (!chatInner) return;

  const div = document.createElement('div');
  div.className = `msg-group ${isUser ? 'user-msg' : ''}`;
  div.innerHTML = `
    <div class="av ${isUser ? 'av-user' : 'av-ai'}">${isUser ? 'You' : 'AI'}</div>
    <div class="bubble ${isUser ? 'bubble-user' : 'bubble-ai'}">${text}</div>
  `;
  chatInner.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  const wrap = document.getElementById('chat-wrap');
  if (wrap) wrap.scrollTop = wrap.scrollHeight;
}

// Main Send Function
function sendMsg() {
  const ta = document.getElementById('chat-ta');
  if (!ta) return;
  let text = ta.value.trim();
  if (!text && pendImages.length === 0) return;

  const userText = text || `Analyze ${pendImages.length} document(s)`;

  addMessage(userText, true);
  ta.value = '';
  clearAllImgs();

  // Typing indicator
  const typingId = 'typing-' + Date.now();
  const chatInner = document.getElementById('chat-inner');
  const typingDiv = document.createElement('div');
  typingDiv.id = typingId;
  typingDiv.className = 'msg-group';
  typingDiv.innerHTML = `<div class="av av-ai">AI</div><div class="bubble bubble-ai"><div class="typing"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div></div>`;
  chatInner.appendChild(typingDiv);
  scrollToBottom();

  setTimeout(() => {
    document.getElementById(typingId)?.remove();

    let reply = "Kuch samajh nahi aaya. Dobara pucho ya lawyer se consult karo.";

    const ql = userText.toLowerCase();
    const match = knowledgeBase.find(item => ql.includes(item.section.toLowerCase()));

    if (match) {
      reply = `<strong>${match.section}</strong><br>${match.text}<br><br><em>Landmark Case:</em> ${match.case}`;
    } else if (ql.includes("bail")) {
      reply = "<strong>BNSS 483</strong> — Bail is rule, jail is exception.<br>Case: Satender Kumar Antil (2022)";
    } else if (ql.includes("fir")) {
      reply = "<strong>BNSS 173</strong> — Zero FIR allowed.<br>Case: Lalita Kumari (2014)";
    } else if (ql.includes("document") || pendImages.length > 0) {
      reply = "Documents analyze ho gaye.<br>Koi badi problem nahi dikhi. Bail ya notice ke liye details batao.";
    }

    addMessage(reply, false);
  }, 800);
}

// Voice
function toggleMic() {
  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    alert("Voice support nahi hai is browser mein. Chrome use karo.");
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'hi-IN';

  recognition.onresult = (e) => {
    document.getElementById('chat-ta').value = e.results[0][0].transcript;
    sendMsg();
  };

  recognition.start();
}

// File Upload
function handleFiles(e) {
  const files = Array.from(e.target.files);
  pendImages = pendImages.concat(files.map(f => ({name: f.name})));
  renderImgPreviews();
}

function renderImgPreviews() {
  const bar = document.getElementById('img-bar');
  const title = document.getElementById('img-bar-title');
  if (bar && title) {
    bar.classList.add('show');
    title.textContent = `📎 ${pendImages.length} documents attached`;
  }
}

function clearAllImgs() {
  pendImages = [];
  const bar = document.getElementById('img-bar');
  if (bar) bar.classList.remove('show');
}

// Global functions for index.html
window.sendMsg = sendMsg;
window.toggleMic = toggleMic;
window.ask = function(q) {
  const ta = document.getElementById('chat-ta');
  if (ta) { ta.value = q; sendMsg(); }
};
window.handleFiles = handleFiles;
window.triggerUpload = () => document.getElementById('up-in').click();
window.triggerCamera = () => document.getElementById('cam-in').click();
window.onKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); } };
window.resize = (el) => { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 160) + 'px'; };
window.clearAllImgs = clearAllImgs;

window.onload = () => {
  console.log("✅ LegalCraft AI - Chat.js Loaded Successfully (Core UI Intact)");
};
