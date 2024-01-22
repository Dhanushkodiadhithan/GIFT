import './App.css'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [boxes, setBoxes] = useState([]);
  
useEffect(() => {
    const generateBoxes = () => {
      const newBoxes = [];
      for (let i = 1; i <= 300; i++) {
        newBoxes.push(<span key={i} className="box">#JERRY</span>);
      }
      setBoxes(newBoxes);
    };
    generateBoxes();
  }, []); 
  return(
  <>
  <div className="sec">{boxes}</div>
  <div class="light">
		<p>Hi Dhanushkodi</p>
		<p>I Know That Today Is Your Birthday</p>
		<p>So This Is My Small Gift For You</p>
		<p>In This I Am Not Going To Wish You</p>
		<p>Normally Only On Birthday Others Will Treat Them As Special </p>
		<p>But You Are <span>Luckeyy!!!</span> Because</p>
		<p>You'r Having The Friends Who Will Treat You As Special Even At Normal Days...</p>
		<p>I Think Now Too They Are Reading This With You</p>
		<p>Whatever...</p>
		<p>Now let's Open The Gift And Read Only The First Card</p>
		<p>And Atlast One Thing</p>
		<p><span>BE YOU !</span></p>
		<p><span>FOR YOU !!</span></p>
</div>
  </>
  )
};

export default App;