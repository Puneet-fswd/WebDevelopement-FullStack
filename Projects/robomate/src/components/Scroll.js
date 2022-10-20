import React from 'react';

const Scroll = (props) => 
{
  return (
    <div style= {{display: 'grid', gridTemplateRows: '100vw', gridTemplateAreas: 'inherit'}}>
      <div style={{ overflowY: 'auto', overflowX: 'hidden'}}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroll;