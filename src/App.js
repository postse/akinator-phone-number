import { useEffect, useState } from 'react';
import './App.css';
import akinator from './akinator.png'
import React from 'react';
import questions from './data/questions';
import akinatorStates from './data/akinatorStates';
import sassyResponses from './data/sassyResponses';

function App() {
  const [questionsLeft, setQuestionsLeft] = useState(JSON.parse(JSON.stringify(questions)))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [guessNumber, setGuessNumber] = useState(0);
  const [akinatorState, setAkinatorState] = useState(akinatorStates.QUESTION);
  const [phoneNumberGuess, setPhoneNumberGuess] = useState("")
  const [currentSassyResponse, setCurrentSassyResponse] = useState("");

  useEffect(() => {
    let randomQuestionIndex = Math.floor(Math.random() * questionsLeft.length);
    setCurrentQuestionIndex(randomQuestionIndex);
  }, [])

  useEffect(() => {
    if (guessNumber >= 1) {
      let newQuestionsLeft = [...questionsLeft.slice(0, currentQuestionIndex), ...questionsLeft.slice(currentQuestionIndex + 1)];
      setQuestionsLeft(newQuestionsLeft);

      let randomQuestionIndex = Math.floor(Math.random() * newQuestionsLeft.length);
      setCurrentQuestionIndex(randomQuestionIndex);

      if (guessNumber % 3 === 0) {
        makeGuess();
      }
    }
  }, [guessNumber])

  const answerSubmitted = () => {
    setGuessNumber(guessNumber + 1);
  }

  const makeGuess = () => {
    setAkinatorState(akinatorStates.ANALYSIS);
    generatePhoneNumber();

    setTimeout(() => {
      setAkinatorState(akinatorStates.RESULT);
    }, 2000);
  }

  const generatePhoneNumber = () => {
    const part1 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const part2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const part3 = Math.floor(Math.random() * 1000).toString().padStart(4, '0');

    // Format the phone number
    const formattedPhoneNumber = `${part1}-${part2}-${part3}`;

    setPhoneNumberGuess(formattedPhoneNumber);
  }

  const wrongGuess = () => {
    if (guessNumber >= 9) {
      setAkinatorState(akinatorStates.LOSE)
    }
    else {
      setCurrentSassyResponse(sassyResponses[Math.floor(Math.random() * sassyResponses.length)])
      setAkinatorState(akinatorStates.SASSY);
      setTimeout(() => {
        setAkinatorState(akinatorStates.QUESTION);
      }, 2000);
    }
  }

  const playAgain = () => {
    setQuestionsLeft(JSON.parse(JSON.stringify(questions)));
    let randomQuestionIndex = Math.floor(Math.random() * questionsLeft.length);
    setCurrentQuestionIndex(randomQuestionIndex);

    setGuessNumber(0);
    setAkinatorState(akinatorStates.QUESTION);
    setPhoneNumberGuess("");
  }

  return (
    <div className='App'>
      <div className='container'>
        <h3 className='header'>Allow Akinator to guess your phone number</h3>
        <div className='mainContent'>
          <img src={akinator} className='akinatorImage' />
          <div className='questionBox'>
            {
              akinatorState.description === akinatorStates.QUESTION.description && (
                <React.Fragment>
                  <h4 className='questionText'>Question {guessNumber + 1}: {questionsLeft[currentQuestionIndex]?.question}</h4>
                  <div className='optionsList'>
                    {questionsLeft[currentQuestionIndex]?.options?.sort(() => Math.random() - 0.5).map((item, index) => (
                      <button key={index} className='option' onClick={answerSubmitted}>{item}</button>
                    ))}
                  </div>
                </React.Fragment>
              )
            }
            {
              akinatorState.description === akinatorStates.ANALYSIS.description && (
                <div>
                  <h4>Analyzing...</h4>
                </div>
              )
            }
            {
              akinatorState.description === akinatorStates.RESULT.description && (
                <div>
                  <h4>Is your phone number...</h4>
                  <h4>{phoneNumberGuess} ?</h4>
                  <div className='winButtons'>
                    <button onClick={() => setAkinatorState(akinatorStates.WIN)}>Yes</button>
                    <button onClick={() => wrongGuess()}>No</button>
                  </div>
                </div>
              )
            }
            {
              akinatorState.description === akinatorStates.WIN.description && (
                <div>
                  <h4>The great Akinator succeeds once again...</h4>
                  <button onClick={() => playAgain()}>Play again</button>
                </div>
              )
            }
            {
              akinatorState.description === akinatorStates.SASSY.description && (
                <div>
                  <h4>{currentSassyResponse}</h4>
                </div>
              )
            }
            {
              akinatorState.description === akinatorStates.LOSE.description && (
                <div>
                  <h4>You got lucky this time... Akinator is having an off day</h4>
                  <button onClick={() => playAgain()}>Play again</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
