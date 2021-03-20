import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
import BENEFITS from 'constants/benefitsCosntants'
//Components
import Grid from '@material-ui/core/Grid'
//Style
import 'components/benefits/BenefitsStyle.css'


const BenefitsContent = () => {

    const benefitCards = 
        BENEFITS.map((e, i) => {
            return(
                <React.Fragment key={i}>
                    <Grid container item xs={12} sm={6}>
                        <div className="benefitContent__card">
                            <img src={e.logo}  alt=""/>
                            <p className="benefitContent__cardTitle">{e.title}</p>
                            <p className="benefitContent__cardDescription">{e.description}</p>
                        </div>
                    </Grid>
                </React.Fragment>
            )
        })
    

    return (
        <section className="benefitContent">
            <div className="benefitContent__text">
                <h2 className="benefitContent__title">{TEXT.benefits.title}</h2>
                <p className="benefitContent__subtittle">{TEXT.benefits.subtitle}</p>
            </div>
            <Grid container spacing={1}>
                {benefitCards}
            </Grid>
        </section>
    )
}

export default BenefitsContent
