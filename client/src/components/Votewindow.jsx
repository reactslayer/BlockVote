import React from 'react';
import '../css/Votewindow.css';

import { useEffect } from 'react';
import CanvasJSReact from '../components/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const VoteWindow = () => {
  const name = ["a","b"];
  var logo = ["https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2xvYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://drive.google.com/file/d/1F7cEUS9b_sjtOHo9SPDBa1ke5fnHuYLg/view?usp=sharing",
  
  ]
    const [selected_candidate , setselected_candidate] = React.useState("A");
    let count=0;
    const data = [{name : "A",logo:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Congresspartylogo%E2%80%A6.png"},
    {name : "B" ,logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/AP_LOGO_2016.png/270px-AP_LOGO_2016.png"},{name : "C",
  logo:"https://e7.pngegg.com/pngimages/762/313/png-clipart-homeland-solidarity-party-sabah-logo-political-party-business-people-logo.png"},{name : "D"
,logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1200px-People%27s_Action_Party_of_Singapore_logo.svg.png"}]
    let candidates = null;
    candidates = name.map(name =><span className={"badge  text-dark candid "+(selected_candidate==name?" select":"bg-light")} onClick ={()=>{const c = count;alert(c); setselected_candidate(name)}}>{name}<img className="party-logo" src={logo[count++]}></img></span>)
    count=0;
    useEffect(() => {
      
      candidates = name.map(name =><span className={"badge  text-dark candid "+(selected_candidate==name?" select":"bg-light")} onClick ={()=>{const c = count;alert(c); setselected_candidate(name)}}>{name}<img className="party-logo" src={logo[count++]}></img></span>)
      count=0;
    });

    const submitHandler = () =>{
      alert(logo[0]);
    }
    return (
       <>
      <div className='vote_container'>

<div className='vote_text'>CANDIDATES</div>

<div className='vote_input-box' >

{candidates}
</div>
<div style = {{display : "flex",justifyContent : "center"}}>
     <button className='btn btn-dark'  id='eci_log_in' onClick = {submitHandler} >CONFIRM VOTE</button>
</div>
</div>
            
       </>
    );
}

export default VoteWindow;