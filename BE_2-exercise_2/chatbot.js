// Exercise-2
const readline = require('readline');
const chatbotResponses = {
  'who made you?': 'Abdulmajeed made me',
  'what are you?': 'I am a chatbot',
};
function startChatbot() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
console.log('Type "exit" to terminate the chatbot.');
function processUserInput(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput === 'exit') {
      console.log('Chatbot has been terminated');
      rl.close();
      process.exit(0);
    }

    if (chatbotResponses[lowerCaseInput]) {
      console.log(`Chatbot: ${chatbotResponses[lowerCaseInput]}`);
    } else {
      console.log("Chatbot: There is no answer for this question");
    }

    rl.question('User: ', processUserInput);
  }
  rl.question('User: ', processUserInput);
}
startChatbot();