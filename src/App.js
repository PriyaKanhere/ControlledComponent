import React, { useState } from 'react';
import './style.css';


const CharacterCounterInput = ({ text, defaults }) => {
  const maxLength = 20
  const [message, setMessage] = useState('')


  return <div className={`counterInput ${message.length > maxLength ? "tooLong" : ""}`}>
    <div>
      {defaults.map((b) => {
        return <button key={b} onClick={
          () => {
            setMessage(b)
          }
        }>{b}</button>
      })}
    </div>
    <textarea
      value={message}
      onChange={(event) => {
        setMessage(event.target.value)
      }}
      placeholder={text}
    />
    <div>{message.length}/{maxLength}</div>
  </div>
}

function App() {
  let defaultMoods = ["Great", "Okay", "Bad"]
  return (
    <section>
      <h2>Mood Tracker</h2>
      <CharacterCounterInput text={"How was your day?"} defaults={defaultMoods} />
    </section>
  );
}

export default App;
