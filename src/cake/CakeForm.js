import {useState} from "react";


const CakeForm = ({onNewCakeSubmission}) => {

    const [name, setName] = useState("");
    const [ingredientsList, setIngredientsList] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");

    const updateCakeName = (event) => {
        setName(event.target.value);
    }
    const updateCakeIngredientsList = (event) => {
        setIngredientsList(event.target.value);
    }
    const updateCakeRating = (event) => {
        setRating(event.target.value);
    }
    const updateCakePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    

        const newCake = {
            cakeName: name,
            ingredients: [ingredientsList],
            rating: rating,
            price: price,
            id: Date.now()
        }

        setName("");
        setIngredientsList("");
        setRating("");
        setPrice("");
        onNewCakeSubmission(newCake);
    }

    return(
        <section>
            <h2>Add a new cake:</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="name-input">Name: </label>
                <input 
                    type="text"
                    id="name-input"
                    onInput={(event) => updateCakeName(event)}
                    value={name}
                />
                <label htmlFor="ingredients-input">Ingredients: </label>
                <input 
                    type="text"
                    id="ingredients-input"
                    onInput={(event) => updateCakeIngredientsList(event)}
                    value={ingredientsList}
                />
                <label htmlFor="rating-input">Rating: </label>
                <input 
                    type="text"
                    id="rating-input"
                    onInput={(event) => updateCakeRating(event)}
                    value={rating}
                />
                <label htmlFor="name-price">Price: </label>
                <input 
                    type="text"
                    id="price-input"
                    onInput={(event) => updateCakePrice(event)}
                    value={price}
                />
                <input type="submit" value="Add new cake"/>
            </form>
        </section>
    )

}

export default CakeForm;