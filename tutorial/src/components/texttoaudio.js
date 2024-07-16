import { useState } from "react";

function TextToAudio() {
  const [speak, setSpeak] = useState(true);

  function handleCLick() {
    let inputValue = document.getElementById("input").value;
    let textToSpeech = new SpeechSynthesisUtterance(inputValue);
    speechSynthesis.speak(textToSpeech);
    setSpeak(inputValue);
  }

  return <ChildComp clickButton={handleCLick} speakValue={speak} />;

}

function ChildComp(props) {
  return (
    <div>
      <div>
        <input type="text" id="input" />
        <button onClick={props.clickButton}>Speak</button>
        <br />
        Speak value: {props.speakValue}
      </div>
    </div>
  );
}
export { TextToAudio };
