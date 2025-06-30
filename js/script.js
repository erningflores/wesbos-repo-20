//window.SpeechRecognition = window.SpeechRecognition || window.webkit.SpeechRecognition;
const recognition = new webkitSpeechRecognition();
recognition.interemResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results).map(element => element[0])
        .map(element => element.transcript).join('');
    
    const poopScript = transcript .replace(/(poop|poo|shit|dump)/gi, '💩');
    p.textContent = poopScript;

    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recognition.addEventListener('end', () => recognition.start());
recognition.start();