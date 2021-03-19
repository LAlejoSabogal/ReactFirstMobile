import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
import BENEFITS from 'constants/benefitsCosntants'
//Style
import 'components/benefits/BenefitsStyle.css'

const BenefitsContent = () => {

    const benefitCards = 
        BENEFITS.map((e, i) => {
            return(
                <div className="card" key={i}>
                    <img src={e.logo}  alt=""/>
                    <p className="cardTitle">{e.title}</p>
                    <p className="cardDescription">{e.description}</p>
                </div>
            )
        })
    

    return (
        <section className="benefitContent">
            <h2>{TEXT.benefits.title}</h2>
            <p className="subtittle">{TEXT.benefits.subtitle}</p>
            {benefitCards}
        </section>
    )
}

export default BenefitsContent
