
import React, { useState } from "react";
//Pour appliquer du css sur notre fichier .js
import "./Count.css";

//on peut aussi écrire: function Count() mais avec les arrow functions c'est beaucoup plus facile.
const Count = () => {

// on utilise le hook useState pour update notre counter, et on l'initialise avec 0.
const [counter, setCounter] = useState(0)
// on utilise un autre hook useState pour changer de couleur du counter, et on l'initialise avec la couleur black.

const [text, setText] = useState('black');

// on définit la fonction qui va incrementer notre counter ainsi changer sa couleur.
const increment = () => {
	// counter+1
	setCounter(counter + 1)
  // counter devient bleu quand sa valeur dépasse 0, sinon il devient bleu.
  setText(counter >= 0 ? 'blue':'red' );

}

// on définit la fonction qui va décrementer notre counter ainsi changer sa couleur.
const decrement = () => {
	setCounter(counter - 1)
  setText(counter <= 0 ? 'red' : 'blue');

}

return (
	<div className="page" >
	<div >
		  <small style={{ color:text}} className="container_text">{counter}</small>
	</div>
  <div >

    
		<button className="btn2"
		onClick={decrement}><span>-</span></button>

    &nbsp;&nbsp;


		<button className="btn"
		onClick={increment}>+</button>
	</div>

	</div>

)
}

export default Count;
