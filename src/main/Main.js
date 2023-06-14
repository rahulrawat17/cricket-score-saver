import React, { useState } from 'react'
import ScoreBoard from '../components/ScoreBoard'
import StepperContainer from '../components/StepperContainer'

const Main = () => {
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponent = () => {
    setShowComponentA((prevValue) => !prevValue);
  };

  return (
    <div>
      {showComponentA ? <StepperContainer onClick={toggleComponent} /> : <ScoreBoard onClick={toggleComponent} />}
    </div>
  );

}

export default Main
