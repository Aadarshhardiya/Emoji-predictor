import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "ð": "Face Savoring Food",
  "ð": "Face with Tongue",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ð": "Squinting Face with Tongue",
  "ðĪ": "Money-Mouth Face",
  "ð": "Winking Face",
  "ð": "Smiling Face with Smiling Eyes",
  "ð": "Smiling Face with Halo",
  "ðĨ°": "Smiling Face with Hearts",
  "ð": "Smiling Face with Heart-Eyes",
  "ðĪĐ": "Star-Struck"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("emoji translation will appear here");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our Database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outt!</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"search your emoji here"}
        style={{
          padding: "1rem",
          paddingInlineEnd: "40rem",
          border: "double"
        }}
      />
      <h2>{meaning} </h2>
      <h3>emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              cursor: "pointer",
              padding: ".5rem",
              fontSize: "2rem"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
