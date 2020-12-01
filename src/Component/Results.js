import React from "react"
import "../App.css"
import Question from "./Question"

const Results = ({username, result, summary}) => {

    return(
    <div className="Results">
        <h1>Well {username} according to your answers: </h1>
        <ul className="summaryList">
    {summary.map((question) => <li>{question.question} : {question.answer}</li>)}
        </ul>
        <h1> the best card for you is: </h1>
        <div className="ticketCard">
        <h1>{result.name}</h1>
        <h3>The price of this ticket: {result.price}</h3>
        </div>
        <h2>Enjoy your stay in Berlin!</h2>
    </div>
    )
}

export default Results