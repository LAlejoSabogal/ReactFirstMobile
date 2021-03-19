import React from 'react'
//Constants
import SUSCRIPTIONS from 'constants/suscriptionAreas'
//Components
import CardContent from 'components/cards/CardContent'
//Style
import 'components/suscriptions/SuscriptionStyle.css'

const SuscriptionContent = () => {

    const cardContent = SUSCRIPTIONS.map((e,i)=>{
        return(
            <div>
                <CardContent
                    key ={i}
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
            {cardContent}
        </section>
    )
}

export default SuscriptionContent
