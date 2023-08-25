import React from 'react'

function Details(props) {
  return (
    <>

    <table border="1px"  className="details">
  
      <thead >
     <tr>
      <th>{`No.`}</th>
      {Object.keys(props.attempts[0]).map((key)=>{
        if(key==="options"){
        return props.attempts[0].options.map((option,i) => <th className='table-header' key={option}>{`OPTION - ${i + 1}`}</th>)
        }else{
          return <th key={key} className='table-header'>{key.toUpperCase()}</th>;
        }
      })}
     </tr>
       </thead>
     <tbody>

     {props.attempts.map((attempt,i) =>{
       return(
         
         <tr key={i}>
          <td>{i+1}</td>
        <td  className='question'>{attempt.question}</td>
         {attempt.options.map(option=> <td className='option' key={option}>{option}</td>)}
        <td  className='option'>{attempt.userSelect}</td>
        <td  className='option'>{attempt.answer}</td>
        <td  className={`option ${attempt.result==="Fail" ? "red" : "green"}`}>{attempt.result}</td>
      </tr>
        )
      })}
      </tbody>
      </table>  

     </>
  )
}

export default Details