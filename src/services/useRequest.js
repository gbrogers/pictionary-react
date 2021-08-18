// import { useState, useEffect } from "react";
// import axios from "axios";

// const baseURL = "/api"; //how does this get to the db.json file?

// export default function useRequest(difficultyChosen) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${baseURL}/?difficulty=${difficultyChosen}`)
//       .then((res) => {
//         console.log(res.data);
//         setData(data);
//       })
//       .catch((error) => console.log(error));
//   }, []);
//   return { data };
// }
