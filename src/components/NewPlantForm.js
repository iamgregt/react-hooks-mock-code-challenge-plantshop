import React from "react";

function NewPlantForm({onNewPlant}) {


  function handleFormSubmit(plant){
    plant.preventDefault()
    const newPlant = {
      "name": plant.target[0].value,
      "image": plant.target[1].value,
      "price": plant.target[2].value
    }
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(newPlant => onNewPlant(newPlant))

    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
