import React, { useState } from "react";

export const useStateExample = () => {
  const [name, setName] = useState("Jhalak");
  return (
    <>
      Name: {name}
      <button onClick={() => setName("Palak")}> set name </button>
    </>
  );
};
