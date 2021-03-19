import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
import BENEFITS from 'constants/benefitsCosntants'

const BenefitsContent = () => {

    const benefitCards = 
        BENEFITS.map((e, i) => {
            return(
                <div className="card" key={i}>
                    {console.log(e.logo)}
                    <img src={e.logo}  alt=""/>
                    <p>{e.title}</p>
                    <p>{e.description}</p>
                </div>
            )
        })
    

    return (
        <section>
            <h2>{TEXT.benefits.title}</h2>
            <p>{TEXT.benefits.subtitle}</p>
            {benefitCards}
        </section>
    )
}

export default BenefitsContent
