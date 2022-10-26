// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';
import 'antd/dist/antd.min.css';

// Iteration 2
function FoodBox({food,deleteHandlerProps }) {
    let caloriass = food.calories * food.servings;

    const deleteHandlerFunc = () => {
        deleteHandlerProps(food.name);
    };


  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {caloriass} </b> kcal
        </p>
        <Button type="primary" onClick={deleteHandlerFunc}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
