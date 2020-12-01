import React, {useState, createContext} from "react"
import './App.css';
import Question from "./Component/Question"
import data from "./Data/data"
import Name from "./Component/Name"
import Results from "./Component/Results"

export const UsernameContext = createContext()
export const ResultContext = createContext()
export const CurrentQuestionContext = createContext()
export const SummaryContext = createContext()
function App() {
  
  const [usernameConfirmed, setUsernameConfirmed] = useState(false)
  const [username, setUsername] = useState("")

  const [currentQuestion, setCurrentQuestion] = useState(1)
  
  const [summary, setSummary] = useState([])

  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState()
  
  const question = data.filter(question => question.id == currentQuestion)[0]

  if (!showResult){
  return (
    <UsernameContext.Provider value={{username, setUsername, setUsernameConfirmed}}>
    <div className="App">
      {!usernameConfirmed && <Name/>}
      {usernameConfirmed && 
        <ResultContext.Provider value={{setResult, setShowResult}}>
          <CurrentQuestionContext.Provider value={{setCurrentQuestion}}>
            <SummaryContext.Provider value={{summary, setSummary}}>
          <div>
            <h1>Hello {username}</h1>
            <Question question={question}/> 
          </div>
          </SummaryContext.Provider>
          </CurrentQuestionContext.Provider>
        </ResultContext.Provider>
        }
    </div>
    </UsernameContext.Provider>
  )
  } else {
return (
<div className="App">
  <Results summary={summary} username={username} result={result}/>
  </div>
  );
}}

export default App;
