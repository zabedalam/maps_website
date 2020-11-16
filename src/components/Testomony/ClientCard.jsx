import React from 'react'

function ClientCard({clientImg}) {
    return (
        <div className="clientCard">
          <img src={clientImg} alt="client"/>  
          <h2>Zabed Alam</h2>
          <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero dolore
      officiis, velit id libero illum harum hic magni, quae repellendus adipisci
      possimus saepe nostrum doloribus repudiandae asperiores commodi voluptate.
    </p>
        </div>
    )
}

export default ClientCard
