import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
//images
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//styles
import 'components/cards/CardStyle.css'

const CardContent = (props) => {

    const activeButton= props.recomendado ? "cardContent__button--active" : "cardContent__button--disable";

    return (
        <div className="cardContent">
            {props.recomendado &&
                <div className="cardContent__infoStick">
                    <p>{TEXT.suscriptions.stickyNote}</p> 
                </div>
            }
            <p className="cardContent__title">{props.title}</p>
            <div className="cardContent__valueContent">
                <div>$</div>
                <div className="cardContent__value">{props.value}</div>
            </div>
            <p className="cardContent__description">{props.description}</p>
            <div className={`cardContent__button ${activeButton}`}>
                <p>{TEXT.suscriptions.buttonText}</p>
                <ArrowForwardIcon fontSize="large"/>
            </div>
        </div>
    )
}

export default CardContent
