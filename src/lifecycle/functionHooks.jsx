import React, { useState, useEffect } from 'react';
function FunctionalCounter() {
  const [count, setCount] = useState(0);

  // Runs once on mount (componentDidMount)
  useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Unmounted'); // cleanup like componentWillUnmount
    };
  }, []);

  // Runs on every update (componentDidUpdate)
  useEffect(() => {
    console.log('Updated:', count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default FunctionalCounter;