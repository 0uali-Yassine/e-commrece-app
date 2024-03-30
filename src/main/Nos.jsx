import React from 'react';
import d from '../Asset/delivery.png';
import money from '../Asset/money.png';
import support from '../Asset/support.png';
import rating from '../Asset/rating .png';

export  function Nos() {

  return (

        <div style={{backgroundColor:'rgb(210, 153, 96)',width:'100%',height:'auto'}}>
            <h1 style={{textAlign:'center',color:'#003c3b',padding:'10px',fontFamily:'var(--font-family-heading)'}}>Nos engagements</h1>
            <p style={{textAlign:'center',color:'#003c3b',fontFamily:'var(--font-family)',padding:'10px',width:'60%',margin:'auto'}}>Maison Ayla procure des bijoux résistants à la corrosion due à la sueur et à l'usure régulière. Nos clients sont assurées de porter tous les jours des bijoux qui resteront aussi beaux que lorsqu'ils les ont reçus.</p>
            <div className='nos'>

                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',width:'200px'}}>
                    <img src={d} width={"90px"} style={{alignSelf:'center'}} alt="delivery" />
                    <p style={{textAlign:'center',color:'#003c3b',fontFamily:'var(--font-family)'}}>Livraison gratuite partout au Maroc</p>
                </div>
                
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',width:'200px'}}>
                    <img src={rating} width={"90px"} style={{alignSelf:'center'}} alt="rating" />
                    <p style={{textAlign:'center',color:'#003c3b',fontFamily:'var(--font-family)'}}>+1400 clientes satisfaites</p>
                </div>

                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',width:'200px'}}>
                    <img src={money}  width={"90px"} style={{alignSelf:'center'}} alt="money" />
                    <p style={{textAlign:'center',color:'#003c3b',fontFamily:'var(--font-family)'}}>Satisfaite ou remboursée dans 14 jours</p>
                </div>

                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',width:'200px'}}>
                    <img src={support} width={"90px"} style={{alignSelf:'center'}} alt="support" />
                    <p style={{textAlign:'center',color:'#003c3b',fontFamily:'var(--font-family)'}}>Support client 24/7</p>
                </div>

            </div>
        </div>
     )
}
