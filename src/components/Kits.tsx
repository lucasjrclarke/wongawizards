// import React from 'react'

const Kits = () => {

    const kit_names = ["Juniors Home 24/25", "Juniors Away 24/25", "Seniors Home 24/25", "Seniors Away 24/25"];
    // const kit_urls = ["2023-jersey-juniors-home", "2023-jersey-juniors-away", "2023-jersey-seniors-home", "2023-jersey-seniors-away"];

  return (
    <div id="kits-rack">
        {kit_names.map((names, index) => (
        <div key={index}>
          {/* if new jerseys come out can update href to be ={kit_urls[index]} and replace the array with correct urls */}
          <a className="kit-link" href="https://macronvic.com.au/collections/wonga-wizards-fc" target="_blank">
            <img src={(`wizards-jerseys/${index+1}.png`)} alt={kit_names[index]} />
          </a>
          <p>{names}</p>
        </div>
      ))}
    </div>
  )
}

export default Kits