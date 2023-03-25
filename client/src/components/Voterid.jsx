import React from 'react';
import '../css/VoterReg.css';

const Voterid = () => {

    let voterid = null;
    
    const setid = (e)=>{
        voterid = e.target.value;
    }

    function submitHandler(event){

        


    }
    return (
        <div>
            <div className="voter-reg-box">
                <div className="voter-reg-title-box">
                    <h2 className="voter-reg-title">Vote</h2>
                </div>
                <form>
                    <div className="mb-3 input-margin">
                        <input onChange={setid} type="text" className="form-control try" id="vr-name" placeholder="Voter id"/>
                    </div>
                   
                    


                    <div className="btn-mid">
                        <button type="submit" className="btn btn-dark mx-2 mt-3" onClick = {submitHandler}>Submit</button>
                    </div>
                </form> 
                 
            </div>   
        </div>
    );
}

export default Voterid;