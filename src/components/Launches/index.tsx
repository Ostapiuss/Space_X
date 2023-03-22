import React from "react";

import LaunchCard from "../LaunchCard";

import './style.scss';

interface Launches {
  launchesData: any[]
}

const Launches: React.FC<Launches> = ({ launchesData }) => {
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
