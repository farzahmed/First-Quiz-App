import React, { useState } from "react";
import Questions from "./Questions.json";
import ResultPage from "./ResultPage.jsx";

// import Details from "./Details";
function GeneralKnowledgeQuiz() {
  const [attempts, setAttempts] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [solved, setSolved] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [next_or_tryAgain , setNext_or_tryAgain] = useState("Next") ;
  
  // For Audio
  

  

  //  GetOptionClass use for getting  class/
  const getOptionClass = (question, selectedOption) => {
  
    if (selectedOption === question.answer) {
      
      
    } else {
      
      return "wrongAns";
    }
  };

  const optionHandle = (question, option, attempts) => {
    

    // This "if" condition check if the selectedOption State contain null value then add the user selected option in selectedOption State and Also Add the question and user Selected option in Attempts state 
    if (selectedOption === null) {
        setSelectedOption(option);
        setAttempts([
            ...attempts,
            { question: question.question, options:Questions[questionIndex].options, userSelect: option , answer : Questions[questionIndex].answer, result : (option===Questions[questionIndex].answer)? "Pass" :"Fail" },
          ]);

        setSolved(solved + 1);
      // Check selectedOption is correct
         (option === question.answer) ? (setCorrectAns(correctAns + 1)) : (setWrongAns(wrongAns + 1))
  
    }
  };



  const buttonHandle = ()=>{
    if (questionIndex < Questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
        setSelectedOption(null);
    } else {
        setShowResult(true);
        setNext_or_tryAgain("Try Again");
        setSelectedOption('');
       
     
    }

    // This Function for Try Again
    
   if(next_or_tryAgain === "Try Again") {
      setShowResult(false);
      setQuestionIndex(0);
      setSolved(0);
      setCorrectAns(0);
      setWrongAns(0);
      setNext_or_tryAgain("Next");
      setSelectedOption(null);
      setAttempts([])
    };

  }


  return (
    <>
      { <div id="quizApp">
        <h1>
           <span>General Knowledge Quiz</span>
        </h1>

        <div className="container">
          {showResult ? (
            <ResultPage
              solved={solved}
              correctAns={correctAns}
              wrongAns={wrongAns}
              totalScore={Questions.length}
              attempts={attempts}
              setAttempts={setAttempts}
              
            />
          ) : (
            <>
              <div className="question">
                <div className="score">
                  <p>Solved : {solved}</p>
                  <p className="green">Correct : {correctAns}</p>
                   <p>Total : {Questions.length}</p>
                </div>
                <h3>{`${questionIndex + 1}: ${
                  Questions[questionIndex].question
                }`}</h3>
                <div className="image">
                  <img src={Questions[questionIndex].image} alt="" />
                </div>
              </div>

              <ul>
                {Questions[questionIndex].options.map((option) => ( <li key={option} className={`${ option === selectedOption ? getOptionClass(  Questions[questionIndex], selectedOption): ""} ${selectedOption !== null ? (option === Questions[questionIndex].answer)? "rightAns" :"" :""}`} onClick={() => optionHandle(Questions[questionIndex], option, attempts)} >
                    {option}
                  </li>
                ))}
              </ul>
            </>
          )}
              <div className="btn ">
                <button  disabled={selectedOption === null ? true : false} onClick={buttonHandle}>{next_or_tryAgain}</button>
              </div>
        </div>
      </div> } 
  
 

    </>
  );
}

export default GeneralKnowledgeQuiz;