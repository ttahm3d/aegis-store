// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function (apiUrl, method = "GET", postData) {
//   const [response, setResponse] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const performXHRActivity = async () => {
//     try {
//       if (method === "p") {
//         const res = await axios.get(apiUrl);
//         setResponse(res)
//       }
//     } catch (e) {
//     } finally {
//     }
//   };

//   useEffect(() => {}, []);

//   return { response, error, isLoading };
// }
