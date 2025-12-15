import React from 'react'
import {Link} from 'react-router'
const Routing = () => {
  return (
    <div>
      <ul>
        <li Link to ="/home">home</li>
        <li Link to ="/about">About</li>
        <li link to = "/shopped">shopped</li>
      </ul>
    </div>
  )
};

const home = () => {
    return (
        <p>This is home component</p>
    )
}

const about = () => {
    return (
        <p>This is about component</p>
    )
}

const shopped = () => {
    return (
        <p> this is shopped</p>
    )
}

export default Routing
export {home,about,shopped}