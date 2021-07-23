import React from 'react'
import FoodItem from './FoodItem'

const food =[
    {
        id: 1,
        foodName: 'Italian Combo',
        price: "$12.99",
        ingredients: 'deli meat, lettuce, tomato, Italian, provolone, mayo'
    },
    {
        id: 2,
        foodName:'Pastrami Sandwich',
        price: "$13.99",
        ingredients: "pastrami, rye bread"
    },
    {
        id: 3,
        foodName: 'Peanutbutter and Jelly',
        price: '$4.99',
        ingredients: 'peanut butter, jelly, bread'
    }
]

function FoodItems() {
    return (
        <div>
            {/* <FoodItem item={food[0]} />
            <FoodItem item={food[1]} />
            <FoodItem item={food[2]} /> */}

            {food.map(sandwich => <FoodItem key={sandwich.id} item={sandwich} />)}
        </div>
    )
}

export default FoodItems