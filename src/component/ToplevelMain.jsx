import React from 'react'
import Hero from '../main/Hero';
import Featureproduct from '../main/Featureproduct';
import { Nos } from '../main/Nos';
import Faqandcontact from '../main/Faqandcontact';

function ToplevelMain() {
  return (
    <div>
      <Hero/>
      <Featureproduct/>
      <Nos/>
      <section>
        <h1 style={{textAlign:'center',fontFamily:'var(--font-family-heading)',padding:'10px'}}>Faq</h1>
        <p style={{textAlign:'center',padding:'10px',fontFamily:'var(--font-family)'}}>Trouvez toutes les réponses aux questions que vous pourriez vous poser sur notre boutique en ligne et nos produits.</p>
        <Faqandcontact/>
      </section>
    </div>
  )
}

export default ToplevelMain;
