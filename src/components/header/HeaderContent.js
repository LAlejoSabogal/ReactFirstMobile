import React from 'react'
//Components
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//Constants
import TEXT from 'constants/stringConstants'
//Styles
import 'components/header/HeaderStyle.css'
//images
import Batatabit from 'images/batatabit.png'

const HeaderContent = () => {
    return (
        <header className="headerContent">
            <div className="headerContent__branch">
                <div>
                    <img src={Batatabit} alt="Batatabit Logo" className="headerContent__imgBranch" />
                </div>
                <div>
                    {TEXT.branch.nameBranch}
                </div>
            </div>
            <div className="headerContent__text">
                <h1>{TEXT.headerContent.title}</h1>
                <p className="headerContent__subtitle">{TEXT.headerContent.subtitle}</p>
            </div>
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
