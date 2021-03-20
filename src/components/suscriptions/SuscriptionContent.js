import React from 'react'
//Constants
import SUSCRIPTIONS from 'constants/suscriptionAreas'
import TEXT from 'constants/stringConstants'
//Components
import CardContent from 'components/cards/CardContent'
//Style
import 'components/suscriptions/SuscriptionStyle.css'

const SuscriptionContent = () => {

    const cardContent = SUSCRIPTIONS.map((e,i)=>{
        return(
            <div key ={i}>
                <CardContent
                    recomendado= {e.price === 49 ? true: false}
                    title= {e.name}
                    value= {e.price}
                    description= {e.description}
                />
            </div>
        )
    })
    return (
        <section className="suscriptionContent">
            <div className="suscriptionContent_text">
                <h2 className="suscriptionContent__title">{TEXT.suscriptions.title}</h2>
                <p className="suscriptionContent__subtitle">{TEXT.suscriptions.subtitle}</p>
            </div>
            <div className="suscriptionContent__cardContainer">
                {cardContent}
            </div>
        </section>
    )
}

export default SuscriptionContent
