import React from 'react'
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const Courseras = () => {
    let s = desserts.sort((a,b) => a.calories  - b.calories)
    // console.log(s)
  return (
    <>
    <ul>
      {s.map((data,index) => (
        data.calories < 500 ? <li key={index}>{data.name} - {data.calories}</li> : null      ))}
    </ul>
 </> )
}

export default Courseras

