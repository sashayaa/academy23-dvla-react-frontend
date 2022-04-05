import React, { useEffect } from 'react';

const Cancel = () => {

  useEffect(() => {
    window.scroll(0, 0)
    
  }, []);

  return (

    <div>
      <h1>Cancel</h1>
    </div>
  )
}

export default Cancel