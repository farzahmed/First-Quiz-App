import React, { useState } from "react";
import Details from "./Details";
function ResultPage(props) {

  const [detailShow , setDetailShow] = useState(false)
  return (
    <>
    {
    detailShow ? (
      <Details attempts={props.attempts} setAttempts={props.setAttempts}></Details>
      
        ):(

          <> 
          <div className="resultPage">
            {props.correctAns === props.totalScore && (
              <>
                <div className="congratulations">
                  <p>Congratulation's</p>
                </div>
              </>
            )}
            <div className="result">
              <p className="green">Your Score: {props.correctAns}</p>
              <p>Total Score: {props.totalScore}</p>
              <p className="red">Wrong Answer: {props.wrongAns}</p>
            </div>
            <div className="detail-btn">
              <button onClick={()=> setDetailShow(true)}>See Details</button>
            </div>
          </div>
              </>
        )

}
    </>
  );
}

export default ResultPage;