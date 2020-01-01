import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<div>
         <h1 className="heading">My Contacts</h1>
        <App name="Beyonce" email="b@beyonce.com" tele="123 456 789" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
        <App name="Jack" email="b@beyonce.com" tele="123 456 789" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"/>
        <App name="Chuck Noris" email="Chuck@gmail.com" tele="123 456 789" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"/>

</div>
, document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
