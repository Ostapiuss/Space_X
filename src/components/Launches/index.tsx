import React from "react";

import LaunchCard from "../LaunchCard";

import {LaunchDocsDataInterface} from "../../interfaces/launch-interface";

import './style.scss';

interface LaunchesInterface {
  launchesData: LaunchDocsDataInterface[]
}

const Launches: React.FC<LaunchesInterface> = ({ launchesData }) => {
  return (
    <div className="launches">
      <h2 className="launches-title">Launches</h2>

      <div className="launches-cards">
        {
          launchesData.map((launchData) => {
            return <LaunchCard launchCardData={launchData} key={launchData.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Launches;
