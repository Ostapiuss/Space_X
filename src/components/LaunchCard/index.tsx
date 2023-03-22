import React from "react";

import AppModal from 'services/AppModalService'

import { StyledLaunchCard } from './StyledLaunchCard';

interface LaunchCard {
  launchCardData: any
}

const JustModal = () => {
  return (
    <div>
      1
    </div>
  )
}

const LaunchCard: React.FC<LaunchCard> = ({ launchCardData }) => {

  const handleClick = () => {
    AppModal.open({
      component: <JustModal />,
      onClose: AppModal.close()
    });
  }

  return (
    <StyledLaunchCard>
      <img src={launchCardData?.links?.patch?.small} alt="space-card-icon" onClick={handleClick} />
      <div className="launch-card-details">
        <h3>{ launchCardData?.name }</h3>
        { launchCardData?.details ? (
          <p>{ launchCardData?.details }</p>
        ): (
          <p>No details yet</p>
        )}
      </div>
    </StyledLaunchCard>
  )
}

export default LaunchCard;
