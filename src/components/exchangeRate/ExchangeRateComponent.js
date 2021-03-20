import React from 'react'
import {useState} from 'react'
//Constants
import TEXT from 'constants/stringConstants'
import coinValue from 'constants/exchangeTable'
//styles
import './ExchangeRateStyle.css'
//Images
import Bitcoin from 'images/Bitcoin.png'
import Grid from '@material-ui/core/Grid'


const ExchangeRateComponent = () => {

    const [moneda, setMoneda] = useState(true)

    let chageTable = function() {
        if (!moneda){
            setMoneda(false)
        }
        else{
            setMoneda(true)
        }
    }

    const tableCoins = coinValue.map((e,i) => {
        return(
            <div className={`${(i===0)?"tableBody":"tableBody--hidden"}`} key={i}>
                <Grid container spacing={1}>
                    {
                        e.map(function (ee,ii) {
                            return(
                                <React.Fragment key={ii}>
                                    <Grid 
                                        container
                                        item
                                        xs={6}
                                        alignContent="center"
                                        justify="flex-start"
                                    >
                                        <div className="tableBody__cell">
                                            {ee.name}
                                        </div>
                                    </Grid>
                                    <Grid 
                                        container
                                        item
                                        xs={6}
                                        alignContent="center"
                                        alignItems="center"
                                        justify="center"
                                    >
                                        <div className="tableBody__cell">
                                            {ee.value}
                                        </div>
                                        <div>
                                            <img src={ee.icon} alt="" />
                                        </div>
                                    </Grid>
                                </React.Fragment>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    })

    return (
        <section className="exchangeRateContent">
            <img src={Bitcoin} alt="Bitcoin Wire" />
            <h2>{TEXT.exchangeRate.title}</h2>
            <p className="description">{TEXT.exchangeRate.subtitle}</p>
            <div className="tableContainer">
                {/* <p>{TEXT.exchangeRate.tableTitle}</p> */}
                {tableCoins}
            </div>
            <div className="infoStick">
              <p className="infoText">{TEXT.exchangeRate.value} <b>{TEXT.exchangeRate.valueType}</b></p> 
            </div>
        </section>
    )
}

export default ExchangeRateComponent
