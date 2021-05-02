import {useState, useEffect} from "react";
// import dummy_data from './data.js';


const useFetchData = () => {
  const [data, f_updateData] = useState(null);
  useEffect(() => {
    const url = 'https://swapi.dev/api/people';
    fetch(url)
    .then(response => response.json())
    .then(d => {
      // console.log('Real fetch() data from API: ', d);
      f_updateData(d);
    })
    .catch(e => console.log(e));
    // f_updateData(dummy_data);
  }, []);

  return data;
}

export default useFetchData;