// import React, { useState } from "react";

// function ToDoItem(props) {
//   const [isDone, setIsdone] = useState(false);
//   function handleClick() {
//     setIsdone((preValue) => {
//       return !preValue;
//     });
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.text}
//       </li>
//       ;
//     </div>
//   );
// }

// export default ToDoItem;

import React from "react";

function ToDoItem(props) {
  // function handleClick() {}
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {}
      <li>{props.text}</li>;
    </div>
  );
}

export default ToDoItem;
