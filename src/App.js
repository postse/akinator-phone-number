import { useEffect, useState } from 'react';
import './App.css';
import akinator from './akinator.png'

function App() {
  let questions = [
    {
      "question": "What is your phone number's favorite color?",
      "options": [
        "Green",
        "Yellow",
        "Red",
        "Purple"
      ]
    },
    {
      "question": "Where is your phone number from?",
      "options": [
        "North America",
        "South America",
        "France",
        "Asia"
      ]
    }
  ]
  
  const [currentQuestion, setCurrentQuestion] = useState({})

  useEffect(() => {
    let randomQuestionIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomQuestionIndex])
  }, [])

  return (
    <div className='App'>
      <h3 className='header'>Allow Akinator to guess your phone number</h3>
      <div className='mainContent'>
        <img src={akinator} className='akinatorImage'/>
        <div className='questionBox'>
          <h4 className='questionText'>{currentQuestion.question}</h4>
          <div className='optionsList'>
            {currentQuestion.options.map(item => (
              <button className='option'>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
