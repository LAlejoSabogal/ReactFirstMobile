import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
import coinValue from 'constants/exchangeTable'
//styles
import './ExchangeRateStyle.css'
//Images
import Bitcoin from 'images/Bitcoin.png'
import Grid from '@material-ui/core/Grid'


const ExchangeRateComponent = () => {

    const tableCoins = coinValue.map((e,i) => {
        return(
            <Grid container spacing={0} key={i}>
                {
                    e.map(function (ee,ii) {
                        return(
                            <React.Fragment key={ii}>
                                <Grid 
                                    container
                                    item
                                    xs={6}
                                    alignContent="center"
                                    justify="start"
                                >
                                    {ee.name}
                                </Grid>
                                <Grid 
                                    container
                                    item
                                    xs={4}
                                    alignContent="center"
                                    justify="center"
                                >
                                    {ee.value}
                                </Grid>
                                <Grid 
                                    container
                                    item
                                    xs={2}
                                    alignContent="center"
                                    justify="center"
                                >
                                    <img src={ee.icon} alt="" />
                                </Grid>
                            </React.Fragment>
                        )
                    })
                }
            </Grid>
        )
    })

    return (
        <section className="exchangeRateContent">
            <img src={Bitcoin} alt="Bitcoin Wire" />
            <h2>{TEXT.exchangeRate.title}</h2>
            <p className="description">{TEXT.exchangeRate.subtitle}</p>
            <div className="tableContainer">
                <p>{TEXT.exchangeRate.tableTitle}</p>
                <div className="tableBody">
                    {tableCoins}
                </div>
            </div>
            <div className="infoStick">
              <p className="infoText">{TEXT.exchangeRate.value} <b>{TEXT.exchangeRate.valueType}</b></p> 
            </div>
        </section>
    )
}

export default ExchangeRateComponent
