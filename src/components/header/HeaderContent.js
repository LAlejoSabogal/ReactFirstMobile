import React from 'react'
//Components
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Constants
import TEXT from '../../constants/stringConstants'
//Styles
import './HeaderComponentStyle.css'
//images
import Batatabit from '../../images/batatabit.png'

const HeaderContent = () => {
    return (
        <header className="headerContent">
            <div className="branch">
                <div>
                    <img src={Batatabit} alt="Batatabit Logo" className="imgBranch" />
                </div>
                <div>
                    {TEXT.branch.nameBranch}
                </div>
            </div>
            <h1>{TEXT.headerContent.title}</h1>
            <p>{TEXT.headerContent.subtitle}</p>
            <div className="buttonHeader">
                <div>
                    {TEXT.headerContent.buttonText}
                </div>
                <ExpandMoreIcon fontSize="large"/>
            </div>
        </header>
    )
}

export default HeaderContent
