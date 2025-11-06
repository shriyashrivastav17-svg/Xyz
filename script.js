const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

// Predefined responses for French politics
const responses = {
    "macron": "Emmanuel Macron est le président actuel de la France depuis 2017. Il est connu pour ses politiques économiques et européennes.",
    "elections": "Les élections présidentielles françaises ont lieu tous les 5 ans. La prochaine est en 2027.",
    "partis": "Les principaux partis sont La République En Marche (LREM) de Macron, Les Républicains (LR), et La France Insoumise (LFI).",
    "histoire": "La Ve République a été fondée en 1958 par Charles de Gaulle, marquant un tournant démocratique.",
    "default": "Désolé, je ne comprends pas. Essayez de demander sur Macron, les élections, ou l'histoire française."
};

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Simulate AI response (basic keyword matching)
    const response = getResponse(message.toLowerCase());
    setTimeout(() => addMessage(response, 'bot'), 500); // Delay for realism
}

function getResponse(input) {
    if (input.includes('macron')) return responses.macron;
    if (input.includes('election')) return responses.elections;
    if (input.includes('parti')) return responses.partis;
    if (input.includes('histoire')) return responses.histoire;
    return responses.default;
}

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.textContent = text;
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll
}

// Allow Enter key to send
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
