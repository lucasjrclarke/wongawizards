// import React from 'react'

const Sponsors = () => {
  const sponsors_names = ["Bendigo Bank", "Jamo Plastering", "Hi Lift Structural"];
  const sponsors_url = ["bendigobank", "jamoplastering", "hiliftstructural"];
  const sponsors_status = ["Platinum", "Platinum", "Platinum"];
  const sponsors_site = ["https://www.bendigobank.com.au/branch/vic/community-bank-warrandyte/", "https://jamoplastering.com.au", ""]
  
  return (
    <div id="sponsors-container">
      {sponsors_names.map((sponsor, index) => (
          <div key={index} className="sponsor">
            <div className="sponsor-content">
              <p className={sponsors_status[index]}>{sponsors_status[index]}</p>
              <a href={sponsors_site[index]}>
                <img src={(`sponsor${sponsors_url[index]}.png`)} alt={sponsor}/>
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