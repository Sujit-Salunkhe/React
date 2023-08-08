import React from 'react'
// import Errorboundry from './Errorboundry';
function Hero({Heroname}) {
    if (Heroname === "joker"){
        throw new Error ("Not a hero");
    }
  return (
    <div>
      {Heroname}
    </div>
  )
}

export default Hero
