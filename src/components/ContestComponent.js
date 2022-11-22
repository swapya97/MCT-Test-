import React from 'react';
import moment from "moment";
import "./contestComponent.css";
const ContestComponent = ({ details,idx }) => {

  let hours = details.duration / 3600;
  let mins = (details.duration % 3600) / 60;
  let secs = (mins * 60) % 60;

  hours = Math.trunc(hours);
  mins = Math.trunc(mins);

 let img1="https://minio.codingblocks.com/amoeba/a1bba30c-cb87-4bd1-b3d9-0dd0a0d5d421.png";
 let img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktvWknnV3K-UmOy9Y7AYAF07IKK2SuL-7Sw&usqp=CAU"; 
 return (
    <div className="totalContest">
      <div className="singleContest">
        <h3>
          <a href={details.url} target="_blank" rel="noreferrer"> 
            {details.name}
          </a>
        </h3>
        <p>
          Start date:
           {moment(details.start_time).subtract(10, "days").calendar()}{" "}
        </p>
        <p>Start time: {moment(details.start_time).format("h:mm:ss a")}</p>
        <p>Duration: {`${hours} hr ${mins} min ${secs} sec`}</p>
        <p>Site: {details.site}</p>
        
      </div>
      <div className="singleContestimg">
        <img
          src={{idx} % 2 !==0?img1:img2}
          alt="img"
        ></img>
      </div>
    </div>
  );
};

export default ContestComponent;
