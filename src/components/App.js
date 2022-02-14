import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])




  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function handleNewPlant(newPlant){
    const udpatedPlants = [...plants, newPlant]
    setPlants(udpatedPlants)
  }


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onNewPlant={handleNewPlant} />
    </div>
  );
}

export default App;
