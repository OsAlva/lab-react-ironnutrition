
// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from "react";
// Iteration 4
function AddFoodForm({addFoodHandler}) {

    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);



    const submitForm = (e) => {
        e.preventDefault();
        addFoodHandler({
            name, 
            image, 
            calories, 
            servings
        });
            
    }

function nameHandler(e) {
    setName(e.target.value);
}

function imageHandler(e) {
    setImage(e.target.value);
}

function caloriesHandler(e) {
    setCalories(e.target.value);
}

function servingsHandler(e) {
    setServings(e.target.value);
    }

  return (
    <form onSubmit={submitForm}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input name="name" value={name} type="text" onChange={nameHandler} />

      <label htmlFor="image">Image</label>
      <Input name="image" value={image} type="text" onChange={imageHandler} />

      <label htmlFor='calories'>Calories</label>
      <Input name="calories" value={calories} type="number" onChange={caloriesHandler} />

      <label htmlFor="servings">Servings</label>
      <Input name="servings" value={servings} type="number" onChange={servingsHandler} />
      
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;



