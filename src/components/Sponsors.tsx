// import React from 'react'

const Sponsors = () => {
  const sponsors_names = ["Bendigo Bank", "Australian Production House", "Ryan Smith", "Hoskins", "Transrock"];
  const sponsors_url = ["bendigobank", "aph", "ryansmith", "hoskins", "transrock"];
  const sponsors_status = ["Platinum", "Silver", "Silver", "Supporting", "Supporting"];
  const sponsors_site = ["https://www.bendigobank.com.au/branch/vic/community-bank-warrandyte/", "https://www.australianproductionhouse.com", "http://www.ryansmith.com.au", "https://www.hoskins.com.au", "https://www.transrock.com.au"]
  
  return (
    <div id="sponsors-container">
      {sponsors_names.map((sponsor, index) => (
          <div key={index} className="sponsor">
            <div className="sponsor-content">
              <p className={sponsors_status[index]}>{sponsors_status[index]}</p>
              <a href={sponsors_site[index]}>
                <img src={(`../src/assets/images/sponsor${sponsors_url[index]}.png`)} alt={sponsor}/>
              </a>
            </div>
            {index != sponsors_names.length-1 && (
              <div className="vertical-line"></div>
            )}
            
          </div>
        ))}
    </div>
  )
}

export default Sponsors