import React, {useContext} from "react"
import {UsernameContext} from "../App"
import "../App.css"
const Name = () => {
    const {setUsername, setUsernameConfirmed} = useContext(UsernameContext)
    return(
    <div className="Name">
      <h1>Please write your name</h1>
        <input className="nameField" placeholder="Name" name="name" type="input" onChange={(e)=>{setUsername(e.target.value)}} required/>
      <button className="nameBtn" onClick={()=>{setUsernameConfirmed(true)}}>Confirm</button>
    </div>
    )
}


export default Name
