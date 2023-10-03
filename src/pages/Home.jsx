import { Schedule } from '../components/Schedule';
import { IconWithText } from '../components/IconWithText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';

import '../styles/pages/home.scss';

export function Home() {
    return (
        <>
            <div className='home__about container standard-padding'>
                <span className='type--subtitle'>Youth retreat</span>
                <h1 className='type--title'>Destined</h1>
                <div className='home__stamp-subtext'>
                    <div className='home__stamp-icon-text'>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className='type--subtitle'>October 6-9</span>
                    </div>
                    <div className='home__stamp-icon-text'>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span className='type--subtitle'>Labelle, QC</span>
                    </div>
                </div>

                <p className='home__verse standard-padding container color-profile-primary standard-margin-top'>"The LORD will work out his plans for my life— for your faithful love, O LORD, endures forever. Don't abandon me, for you made me." <span>- Psalms 138:8 NLT</span></p>

                <p className='home__content standard-padding'>Themed "Destined," this youth retreat is aimed to help you discover your destiny. From a Christ centered approach, we'll explore topics of: divine direction, heavenly character building, and practical living. Participate in engaging lectures, sermonettes, and workshops. Also, enjoy physical and hands-on activities such as: hiking, cooking, and wellness pursuits. We hope that this retreat will supply tools and frameworks to help you walk a closer walk with God here on earth, and for eternity.</p>
            </div>

            <Schedule />

            {/* Icons w/ text locations w/ pin link */}
            <div className='icon-with-text__parent container standard-padding'>
                <IconWithText title="Cottage"
                 link="https://maps.app.goo.gl/y2jXJWA9Q5gL7y9u7" 
                 icon={<FontAwesomeIcon icon={ faHouseChimneyWindow }/>} 
                 content="301 Rue de la Montagne, Les Laurentides, QC J0T 1H0" />
                 <IconWithText title="Gym"
                 link="https://maps.app.goo.gl/GPRXDCVPUtotA5dS9" 
                 icon={<FontAwesomeIcon icon={faBasketball}/>} 
                 content="Labelle Centre Community · 29 Rue du Couvent, Labelle, QC J0T 1H0" />
                 <IconWithText title="Hike"
                 link="https://maps.app.goo.gl/nNvGmNjBtbaFJjHZ8" 
                 icon={<FontAwesomeIcon icon={faPersonHiking}/>} 
                 content="3050 Chem. du Lac Baptiste, Labelle, QC J0T 1H0, Canada" />
            </div>
        </>
    )
}