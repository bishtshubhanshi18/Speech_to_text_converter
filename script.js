const waves = document.querySelectorAll(".ImgAni");

function convertToSpeech() {
    var inputText = document.getElementById("inputText").value;
    if (inputText.trim() !== "") {
        var speech = new SpeechSynthesisUtterance();
        speech.text = inputText;
        speech.lang = 'hi-IN'; // Hindi language code
        speechSynthesis.speak(speech);
    } else {
        alert("Please enter text to convert.");
    }
}

function convertToText() {
    waves.forEach((item) => {
        item.style.display = 'block';
    });
    
    var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'hi-IN'; // Hindi language code
    recognition.onresult = function(event) {
        console.log("In The Function")
        var result = event.results[0][0].transcript;

        console.log("In Second Line of The Function")
        // document.getElementById("voiceToTextOut").value = result;
        console.log(result);

        console.log("Post Showing The Result")
    };
    recognition.start();

    recognition.onresult = (event) => console.log(event.results[0][0].transcript);
    console.log("In The Function");

    setTimeout(() => { waves.forEach((item) => item.style.display = 'none'); }, 1500);
    
    recognition.onresult = (event) => console.log(event.results[0][0].transcript);
}
