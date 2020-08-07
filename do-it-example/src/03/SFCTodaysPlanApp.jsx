import React from 'react';

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획 없음</button>
    </div>
  );
}

export default TodaysPlanApp;
