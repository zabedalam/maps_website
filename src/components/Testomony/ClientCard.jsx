import React from 'react'
import { Container } from 'reactstrap'

function ClientCard({clientImg}) {
    return (
        <Container className="clientCard">
          <img src={clientImg} alt="client"/>  
          <h2>Zabed Alam</h2>
          <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero dolore
      officiis, velit id libero illum harum hic magni, quae repellendus adipisci
      possimus saepe nostrum doloribus repudiandae asperiores commodi voluptate.
    </p>
        </Container>
    )
}

export default ClientCard
