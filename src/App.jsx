import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
function cards(val)
{
    
  return (
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        watchlink={val.watchlink}
      />
  );
}

const App = (pops) => {
  return (
    <>
     {Sdata.map(cards)}
    </>
  );
}

export default App;