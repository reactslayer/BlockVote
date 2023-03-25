import React from "react";
import "../css/Results.css";

import { useEffect, useState } from "react";
import CanvasJSReact from "../components/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Results = (props) => {

const [scoreCard, setscoreCard] = useState(null);
const [options, setoptions] = useState({});

const [options2, setoptions2] = useState({});

var datapoints = {};

  const setDatapoints = async (_datapoints) => {
      
    datapoints = _datapoints;
    setoptions({
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", //"light1", "dark1", "dark2"
        title: {
          text: "SCORE ",
        },
        axisY: {
          includeZero: true,
        },
        data: [
          {
            type: "column", //change type to bar, line, area, pie, etc
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: _datapoints,
          },
        ],
      }) ;

      setoptions2({
        animationEnabled: true,
        exportEnabled: false,
        theme: "dark2", // "light1", "dark1", "dark2"
        title: {
          text: "Overall distribution of votes",
         
        },
        axisY:{
          labelFontColor: "red",
        }
        ,
        data: [
          {
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: _datapoints,
          },
        ],
      }) 
  };


  const prepareData = (xd, yd, indexLabeld, logod) => {
    let datapoints = [];

    for (var count = 0; count < xd.length; count++) {
      datapoints.push({
        x: xd[count],
        y: yd[count],
        indexLabel: indexLabeld[count],
        logo: logod[count],
      });
    }
    return datapoints;
  };
  

  useEffect(async () => {
   // const results = await props.Web3States.contractInst.methods.getResults().call();
   const results = [[1,4],["A","B"],["https://upload.wikimedia.org/wikipedia/en/thumb/2/28/People%27s_Action_Party_of_Singapore_logo.svg/1200px-People%27s_Action_Party_of_Singapore_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Congresspartylogo%E2%80%A6.png"
     ]]
    let hold = 10;
    let arr = [];
    for (let w = 0; w < results[0].length; w++) {
      arr.push(hold);
      hold += 10;
    }
    
    let data = prepareData(arr, results[0], results[1], results[2]);
    
    setDatapoints(data);
    setscoreCard( data.map((dataPoint) => (
      <span className="first">
        <div>
          {" "}
          <img className="party-logo" src={dataPoint.logo}></img>
          {dataPoint.indexLabel} : {dataPoint.y}
        </div>{" "}
      </span>
    )));
    
  },[]);

  return (
    <>
    
      <div className="winner-container"></div>
      <div className="container">
         
        {options.length != 0?<CanvasJSChart
          options={options}
        />:""}
        <div style={{ width: "200px", height: "200px" }}></div>
        {options2.length!=0?<CanvasJSChart
          options={options2}
        />:""}
      </div>
      <div className="container2">{scoreCard}</div>
    </>
  );
};

export default Results;