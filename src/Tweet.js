import React, {useState} from 'react';
import './App.css'

function Tweet({name, message,}){

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

	return(
		<div className='tweet'>
			<h3>{name}</h3>
			<p>{message}</p>
			<h3>Number of likes</h3>
			<h4>{count}</h4>
			<button onClick={increment} className="button-likes">like</button>
		</div>
	);
}

export default Tweet;