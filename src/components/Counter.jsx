import React, { useState } from "react";

function Counter(props) {
  const [number, setNumer] = useState(1);

  const changeNumber = (value) => {
    setNumer(number + value);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={(e) => changeNumber(1)}>증가</button>
      <button onClick={(e) => changeNumber(-1)}>감소</button>
    </div>
  );
}

export default Counter;
