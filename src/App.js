import { useState } from "react";
import DrinkCard from './DrinkCard';

const drinksList = [
  { id: 0,
  name: "Margarita",
  fruit: "lime",
  alcohol:"tequila"
},
{ id: 1,
  name: "Paloma",
  fruit: "lime" + " " + "grapefruit",
  alcohol:"tequila"
},
{ id: 2,
  name: "Vodka Cranberry",
  fruit: "cranberry",
  alcohol:"vodka"
}
]

function App() {
  const [categoryFilter, setCategoryFilter] = useState('All')
 
  let filteredDrinks
  if(categoryFilter === 'All') {
    filteredDrinks = drinksList
  }
  else{
    filteredDrinks = drinksList.filter(drink => drink.category === categoryFilter)
  }
  return (
    <div>
      <h1>My Drinks</h1>
      { filteredDrinks.map( d => <DrinkCard drink={d} /> ) }
    </div>
  );
}

export default App;
