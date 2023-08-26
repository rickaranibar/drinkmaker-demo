
function DrinkCard(props) {
  return (
    <div>
      <div className='bg-light border p-4 m-2' >
          <h4>{props.drink.name}</h4>
          <p>{props.drink.fruit}</p>
          <p>{props.drink.alcohol}</p>
       </div>
    </div>
  )
}

export default DrinkCard