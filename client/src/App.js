import React, { useEffect } from "react";
import ActivitiesPage from "./Components/ActivitiesPage";
import SpecificActivity from "./Components/SpecificActivity";

const App = () => {
  useEffect(() => {
    const url = "http://localhost:5000/events";
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Hostel Life</h1>
      <SpecificActivity />
      <ActivitiesPage />
    </>
  );
};

export default App;
