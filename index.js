let element = document.getElementById('text');

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

recognition.lang = 'en-US';
recognition.continuous = true;

document.onclick = () => recognition.start();

recognition.onresult = (event) => {
    element.innerText = event.results[0][0].transcript;
}