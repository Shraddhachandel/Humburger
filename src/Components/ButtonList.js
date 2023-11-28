import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = ["All", "Gaming", "Gardening","Watching","Riding", "Working","Singing", "Sawing", "Playing", "Dancing", "Making", "Reading", "Hoping"];

  return (
    <div className="flex">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
