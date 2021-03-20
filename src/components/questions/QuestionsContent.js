import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
import accordionText from 'constants/accordionText'
//Components
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@material-ui/core'
//Style
import 'components/questions/QuestionsStyle.css'
//icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const QuestionsContent = () => {

    const accordionPanel = accordionText.map((e, i)=>{
        return(
            <Accordion key={i}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <p>{e.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>{e.answer}</p>
                </AccordionDetails>
            </Accordion>
        )
    })

    return (
        <section className="sectionContent">
            <div className="sectionContent__container">
                <h2 className="sectionContent__title">{TEXT.questions.title}</h2>
                {accordionPanel}
            </div>
        </section>
    )
}

export default QuestionsContent
