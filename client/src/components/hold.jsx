import React from 'react';
import '../css/Results.css';

import { useEffect } from 'react';
import CanvasJSReact from '../components/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Results = () => {

    // const datapoints =  [{ x: 10, y: 71 ,indexLabel:"A",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1200px-People%27s_Action_Party_of_Singapore_logo.svg.png"},
    // { x: 20, y: 55 ,indexLabel:"B",logo:"https://upload.wikimedia.org/wikipedia/commons/e/e6/Congresspartylogo%E2%80%A6.png"},
    // { x: 30, y: 50 ,indexLabel:"C",logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/AP_LOGO_2016.png/270px-AP_LOGO_2016.png"},
    // { x: 40, y: 65 ,indexLabel:"D",logo:"https://e7.pngegg.com/pngimages/762/313/png-clipart-homeland-solidarity-party-sabah-logo-political-party-business-people-logo.png"},
    // ];

    let datapoints = [];
    var x = [10,20,30,40];
    var y=[71,55,50,65];
    var indexLabel = ["A","B","C","D"];
    var logo = ["https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1200px-People%27s_Action_Party_of_Singapore_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/Congresspartylogo%E2%80%A6.png","https://upload.wikimedia.org/wikipedia/en/thumb/0/04/AP_LOGO_2016.png/270px-AP_LOGO_2016.png",
    "https://e7.pngegg.com/pngimages/762/313/png-clipart-homeland-solidarity-party-sabah-logo-political-party-business-people-logo.png"
]
    
    const prepareData = (xd,yd,indexLabeld,logod) => {

        let datapoints = [];

        for(var count =0;count<x.length;count++){
            datapoints.push({x:xd[count] , y:yd[count] , indexLabel:indexLabeld[count],logo:logod[count]});
        }
        return datapoints;
    }
    datapoints = prepareData(x,y,indexLabel,logo);
    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "dark2", //"light1", "dark1", "dark2"
        title:{
            text: "SCORE "
        },
        axisY: {
            includeZero: true
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: datapoints
            
        }]
    }
     var scoreCard = null;
    // scoreCard = datapoints.map(dataPoint =><div className= "first"><div> <img className="party-logo" src={dataPoint.logo}></img>{dataPoint.indexLabel} : <strong>{dataPoint.y}</strong></div> </div>)
    const options2 = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "dark2", // "light1", "dark1", "dark2"
        title:{
            text: "Overall distribution of votes"
        },
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",		
            startAngle: -90,
            dataPoints: datapoints
        }]
    }
    
    useEffect(() => {
        scoreCard = datapoints.map(dataPoint =><span className= "first"><div> <img className="party-logo" src={dataPoint.logo}></img>{dataPoint.indexLabel} : {dataPoint.y}</div> </span>)
        
      });

    return (
       <>
       <div className= "winner-container"></div>
       <div className = "container">
        
      <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
        <div style={{width:"200px",height:"200px"}}></div>
<CanvasJSChart options = {options2} 
				/* onRef={ref => this.chart = ref} */
			/>
    
            </div>
            <div className="container2">
               {scoreCard}
          
      </div>
            
       </>
    );
}

export default Results;