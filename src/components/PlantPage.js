import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onNewPlant}) {
  const [searchTerm, onSearchTerm] = useState("")

  function handleSearch(e){
    onSearchTerm(e.target.value)
  }


  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
