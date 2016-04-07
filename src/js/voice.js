var $ = require('jquery');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';

// quit trigger
recognition.addEventListener('result', function(event) {
  var text = event.results.item(0).item(0).transcript;
  $('#result-text').val(text);

  var synthes = new SpeechSynthesisUtterance();
  synthes.voiceURI = 'native';
  synthes.volume = 1;
  synthes.rate = 1;
  synthes.pitch = 1;
  synthes.voice = 'Yuna';
  synthes.text = text;
  synthes.lang = 'ja-JP';
  speechSynthesis.speak(synthes);

}, false);



// start record
$('.start-record').on('click', function() {
  recognition.start();
});
