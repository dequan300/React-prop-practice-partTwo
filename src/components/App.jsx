import React from "react";
import Card from "./card";
import Contacts from "../contacts";

function creatCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tele={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(creatCard)}
      {/* <Card
        name={Contacts[0].name}
        email={Contacts[0].email}
        tele={Contacts[0].phone}
        img={Contacts[0].imgURL}
      />
      <Card
        name={Contacts[1].name}
        email={Contacts[1].email}
        tele={Contacts[1].phone}
        img={Contacts[1].imgURL}
      />
      <Card
        name={Contacts[2].name}
        email={Contacts[2].email}
        tele={Contacts[2].phone}
        img={Contacts[2].imgURL}
      /> */}
    </div>
  );
}

export default App;
export { creatCard };
