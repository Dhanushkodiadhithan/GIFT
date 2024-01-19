import './App.css'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [boxes, setBoxes] = useState([]);
  
useEffect(() => {
    const generateBoxes = () => {
      const newBoxes = [];
      for (let i = 1; i <= 300; i++) {
        newBoxes.push(<span key={i} className="box">#DHANU</span>);
      }
      setBoxes(newBoxes);
    };
    generateBoxes();
  }, []); 
  return(
  <>
  <div className="sec">{boxes}</div>
  <div class="light">
		<p>Hello..Guys</p>
		<p>Welcome to my website</p>
		<p>Here you can</p>
		<p>Get Quotes with</p>
		<p>Different categories like</p>
		<p>Happy</p>
		<p>Sad</p>
		<p>Motivation</p>
		<p>Life</p>
		<p>Reality</p>
		<p>Friends</p>
		<p>Relationship</p>
		<p>And so on..</p>
		<p>Let's <span>Enjoy</span> it</p>
</div>
  </>
  )
};

export default App;