const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

loadGrammar('lw_vault');

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = processRecognitionEvent; 

function loadGrammar(grammarName) {
	speechRecognitionList.addFromUri(`./grammars/${grammarName}.jsfg`);
	recognition.grammars = speechRecognitionList;
	recognition.continuous = true;
	recognition.lang = "en-US";
	recognition.interimResults = false;
	recognition.maxAlternatives = 1;
}

function processRecognitionEvent(event) {
  console.log(event.results);
}
