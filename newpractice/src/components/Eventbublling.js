import { useEffect, useState } from "react";
import './form.css';
const Eventbublling = () => {
  const [data, setData] = useState([]);

  const handleEvents = (e) => {
    console.log(e.target.firstChild.data)
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error Status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((e) => console.log(`error ${e}`));
  }, [data]);

  return (
    <div>
      {data && data.map((Val) => (
        <ul key={Val.id} onClick={handleEvents} className="box_1">
          <li>{Val.name}</li>
          <li>{Val.username}</li>
          <li>{Val.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default Eventbublling;
