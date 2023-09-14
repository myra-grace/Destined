import '../styles/components/schedule.scss';
import { Accordion } from './Accordion';

// TODO: Make sessions into component

export function Schedule() {
    const fridayContent = 
        <>
            <div className='accordion__data-item empty-row' data-row-fill='20'></div>
            <div className='accordion__data-item'>
                <span aria-label='time' className='hide'>6:00pm</span>
                <h2>
                    Group dinner @ church
                </h2>
            </div>
            <div className='accordion__data-item'>
                <span aria-label='time' className='hide'>6:30pm</span>
                <h2>
                    Vesper kick-off
                </h2>
            </div>
            <div className='accordion__data-item' data-row-fill='4'>
                <span aria-label='time' className='hide'>7:00pm to 9:00pm</span>
                <h2>
                    Convoy travel
                </h2>
            </div>
        </>
    ;

    const saturdayContent = 
        <>
            <div className='accordion__data-item'>
                <span aria-label='time' className='hide'>8:00am</span>
                <span aria-label='facilitator'>Lance Kelly</span>
                <h2>Morning fitness</h2>
            </div>
            <div className='accordion__data-item'>
                <span aria-label='time' className='hide'>8:30am</span>
                <span aria-label='facilitator'>Marsjey Hymn</span>
                <h2>Morning devotional 1</h2>
            </div>
            <div className='accordion__data-item'>
                <span aria-label='time' className='hide'>9:00am to 10:00am</span>
                <h2>Breakfast</h2>
            </div>
            <div className='accordion__data-item'>
                <span aria-label='time' className='hide'>10:00am to 11:00am</span>
                <span aria-label='facilitator'>Lyle Fajilagot & *</span>
                <h2>Where am I?</h2>
            </div>
        </>
    ;

    const sundayContent = 
        <table>
            <tbody>
                <tr>
                    <th>Myself in the Community</th>
                </tr>
                <tr>
                    <td>
                        Sunday content
                    </td>
                </tr>
            </tbody>
        </table>
    ;

    const mondayContent = 
        <table>
            <tbody>
                <tr>
                    <th>Practical Measures</th>
                </tr>
                <tr>
                    <td>
                        Monday content
                    </td>
                </tr>
            </tbody>
        </table>
    ;
    
    return (
        <div className='schedule__wrapper'>
            <h1 className='schedule__title'>Schedule</h1>

            <div className='schedule__inner'>
                <div className='schedule__time'>
                    <span>8:00am</span>
                    <span>8:30am</span>
                    <span>9:00am</span>
                    <span>9:30am</span>
                    <span>10:00am</span>
                    <span>10:30am</span>
                    <span>11:00am</span>
                    <span>11:30am</span>
                    <span>12:00am</span>
                    <span>12:30am</span>
                    <span>1:00pm</span>
                    <span>1:30pm</span>
                    <span>2:00pm</span>
                    <span>2:30pm</span>
                    <span>3:00pm</span>
                    <span>3:30pm</span>
                    <span>4:00pm</span>
                    <span>4:30pm</span>
                    <span>5:00pm</span>
                    <span>5:30pm</span>
                    <span>6:00pm</span>
                    <span>6:30pm</span>
                    <span>7:00pm</span>
                    <span>7:30pm</span>
                    <span>8:00pm</span>
                    <span>8:30pm</span>
                    <span>9:00pm</span>
                    <span>9:30pm</span>
                    <span>10:00pm</span>
                    <span>10:30pm</span>
                    <span>11:00pm</span>
                </div>

                <div className='schedule__details-wrapper'>
                    <Accordion title='Friday' subtitle='Kick-off' content={ fridayContent } open={ true }/>
                    <Accordion title='Saturday' subtitle='Getting Oriented' content={ saturdayContent }/>
                    <Accordion title='Sunday' subtitle='Myself in the Community' content={ sundayContent }/>
                    <Accordion title='Monday' subtitle='Practical Measures' content={ mondayContent }/>
                </div>
            </div>
        </div>
    )
}