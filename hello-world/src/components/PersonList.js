import React from "react";

function PersonList({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} ,i am {person.age} ,i know this Computer language{person.skill}
      </h2>
    </div>
  );
}
export default PersonList;
