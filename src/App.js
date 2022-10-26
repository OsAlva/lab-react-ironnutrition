import './App.css';
import foods from './foods.json';
//import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {

  const [foodList, setFoodList] = useState(foods);
  const[basedOnSearch, setBasedOnSearch] = useState(foods);


  const addFoodHandler = (food) => {
    const foodMod = [...foodList, food];
    setFoodList(foodMod);
  }

  const searchFoodHandler = (searchFood) => {
    // const copyFood = [...foodList];
    const filteredData = basedOnSearch.filter((food) => {
      if(searchFood ===  ""){
        return food;
      }
      else{
        return food.name.toLowerCase().includes(searchFood.toLowerCase());
      }

    });
    setFoodList(filteredData);
  }

  const deleteFood = (foodName) => {
    console.log("foodName", foodName);
    const filteredData = foodList.filter((food) => {
      return food.name !== foodName;
    })
    setFoodList(filteredData);
  }

  return (
    <div className="App">
     <h1>Food List</h1>
     {/* <div className='listFood'> */}
      {/* {foodList.map((food) => {
        return(
        <div>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} width={100}/>
        </div>
        );
      })} */}

      {/* <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} /> */}
      <div className='search'>
        <h2>Search</h2>
        <Search searchFoodHandler={searchFoodHandler} />
      </div>
      <div>
        <AddFoodForm addFoodHandler={addFoodHandler}/>
      </div>
      <div className='listFood'>
      {foodList.map((food) => {
        return(
        <div>
          <FoodBox food={food} deleteHandlerProps={deleteFood} />
        </div>
        );
      })}
      </div>
      


      
    </div>
  );

  
}

export default App;

