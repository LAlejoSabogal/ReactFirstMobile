import React from 'react'
//Constants
import TEXT from 'constants/stringConstants'
//Styles
import 'components/advertisingBanner/AdvertisingBannerStyle.css'

const AdvertisingBannerContent = () => {
    return (
        <section className="advertisingBannerContent">
            <p className="advertisingBannerContent__title">
                {TEXT.AdvertisingBanner.title}
            </p>
        </section>
    )
}

export default AdvertisingBannerContent
