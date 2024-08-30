const chatbotIcon = document.getElementById('chatbot-icon');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');

chatbotIcon.addEventListener('click', () => {
    chatbot.style.display = 'flex';
});

chatbotClose.addEventListener('click', () => {
    chatbot.style.display = 'none';
});
