const Cake = ({cake}) => {
  
  const IngredientsList = cake.ingredients.map((ingredient) => {
    return <li>{ingredient}</li>  
  })
    

  return (
    <>
        <p><b>Name:</b>{cake.cakeName}</p>
        <p><b>Ingredients:</b></p>
        <ul>{IngredientsList}</ul>
        <p><b>Price:</b>{cake.price}</p>
        <p><b>Rating:</b>{cake.rating}</p>
    </>
  )
}

export default Cake;