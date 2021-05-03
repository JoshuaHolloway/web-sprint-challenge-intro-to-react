import {useState, useEffect} from "react";
import dummy_data from './dummy-data.js';

const useFetchData = () => {
  const [data, updateData] = useState(null);
  useEffect(() => {

    // const do_fetch = () => {
    //   const url = 'https://swapi.dev/api/people';
    //   fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     // console.log('Real fetch() data from API: ', d);
    //     updateData(data);
    //   })
    //   .catch(e => console.log(e));
    // };
    const do_fake_fetch = () => {
      updateData(dummy_data);
    };
    // do_fetch();
    do_fake_fetch();
  }, []);

  return data;
}

export default useFetchData;