import { Schedule } from '../components/Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import '../styles/pages/home.scss';

export function Home() {
    return (
        <>
            <div className='home__about container'>
                <span className='type--subtitle'>Youth retreat</span>
                <h1 className='type--title'>Destined</h1>
                <div className='home__stamp-subtext'>
                    <div><FontAwesomeIcon icon={faCalendar} /><span className='type--subtitle'>October 6-9</span></div>
                    <div><FontAwesomeIcon icon={faLocationDot} /><span className='type--subtitle'>Labelle, QC</span></div>
                </div>

                <div>
                    <p>"The LORD will work out his plans for my life— for your faithful love, O LORD, endures forever. Don't abandon me, for you made me." <span>- Psalms 138:8 NLT</span></p>
                </div>

                <div>
                    <p>Themed "Destined," this youth retreat is aimed to help you discover your destiny. From a Christ centered approach, we'll discuss topics of: life direction, character building, and practical living. Participate in engaging lectures, sermonettes, and workshops. Also, enjoy physical and hands-on activities such as: hiking, cooking, and wellness pursuits.</p>
                </div>
            </div>

            <Schedule />

            {/* Icons w/ text locations w/ pin link */}
            <div>Icons w/ text component here</div>
        </>
    )
}