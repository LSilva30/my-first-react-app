import React from 'react'

function FoodItem(props) {
  return (
    <div>
      <h4>{props.item.foodName}</h4>
      <p>{props.item.ingredients}</p>
      <p><strong>{props.item.price}</strong></p>
    </div>
  )
}

export default FoodItem
