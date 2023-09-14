import { Schedule } from '../components/Schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import '../styles/pages/home.scss';

export function Home() {
    return (
        <>
            <div className='home__wrapper'>
                <div className='home__banner container'>
                    <span className='type--subtitle'>Youth retreat</span>
                    <h1 className='type--title'>Destined</h1>
                    <div className='home__banner-subtext'>
                        <div><FontAwesomeIcon icon={faCalendar} /><span className='type--subtitle'>October 6-9</span></div>
                        <div><FontAwesomeIcon icon={faLocationDot} /><span className='type--subtitle'>Labelle, QC</span></div>
                    </div>
                    <p>Themed "Destined," this youth retreat is aimed to help you discover your destiny. From a Christ centered approach, we'll discuss topics of: life direction, character building, and practical living. Participate in engaging lectures, sermonettes, and workshops. Also, enjoy physical and hands-on activities such as: hiking, cooking, and wellness pursuits.</p>
                </div>
            </div>

            <Schedule />
        </>
    )
}