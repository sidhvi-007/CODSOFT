// JavaScript for handling the chatbot functionality

const chatbotIcon = document.getElementById('chatbot-icon');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');

// Open chatbot window when icon is clicked
chatbotIcon.addEventListener('click', () => {
    chatbot.style.display = 'flex';
});

// Close chatbot window when close button is clicked
chatbotClose.addEventListener('click', () => {
    chatbot.style.display = 'none';
});
