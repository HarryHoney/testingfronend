import React, { useState } from 'react';
import axios from 'axios'
import url from './url'
const RequestedGrant = (props) => {

    const [votesCased,setvotesCased] = useState(props.voters)
    const toProject = props.toProject
    const purpose = props.purpose
    function voteUp(e){
        e.preventDefault();
        const obj = {
            userID:props.currUser,
            purpose,
            toProject,
            currProject:props.currProject
        }
        axios.post(url.localhost+'/tc/voteForGrant',obj).then(res=>{
            const response = res.data
            if(response == 'success')
            {
                setvotesCased(votesCased+1);    
            }
            alert(response)
        })
    }

    function voteDown(e){
        e.preventDefault();
        const obj = {
            userID:props.currUser,
            purpose,
            toProject,
            currProject:props.currProject
        }
        axios.post(url.localhost+'/tc/voteDown',obj).then(res=>{
            const response = res.data
            if(response == 'success')
            {
                alert("You voted negative for the Grant Request");    
            }
            else
            alert(response)
        })
    }

    return (
        <div>
            <br></br>
            <h1>Project Name : {toProject}</h1>
            <h4>Aim of Project : {purpose}</h4>
            <h4>Requesting Amount : {props.amount} ETH</h4>
            <h4>votes : {votesCased}</h4>
            <br></br>
            <button onClick={voteUp}>Vote Up</button>
            <button onClick={voteDown}>Vote Down</button>
            <hr/>
            <br></br><br></br>
        </div>
    )
}

export default RequestedGrant;