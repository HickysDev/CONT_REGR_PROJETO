import "./App.css";

import NewYear from "./assets/photo.jpg";

import {useContext} from "react";
import {CountdownContext} from "./context/CountdownContext";
import {Outlet} from "react-router-dom";

function App() {
  const {event} = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;
  return (
    <>
      <div
        className="App"
        style={
          eventImage
            ? {backgroundImage: `url(${event.image})`}
            : {backgroundImage: `url(${NewYear})`}
        }>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
