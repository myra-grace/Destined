import '../styles/components/schedule.scss';
import { Accordion } from './Accordion';
import { SessionItem } from './SessionItem';

// TODO: Make sessions into component

export function Schedule() {
    const fridayContent = 
        <>
            <SessionItem slotFill={ 20 } />
            <SessionItem time="6:00pm" title="Destined kick-off" facilitator="Marc Vicuna" slotFill={ 2 } link={true}/>
            <SessionItem time="7:00pm to 9:00pm" title="Convoy travel" slotFill={ 4 } link={true}/>
            <SessionItem time="9:00pm to 10:00pm" title="Hot choco / Tea time" slotFill={ 2 }/>
            <SessionItem time="10:00pm to 11:00pm" slotFill={ 2 }/>
            <SessionItem time="10:30pm to 11:00pm" title="Lights out"/>
        </>
    ;

    const saturdayContent = 
        <>
            <SessionItem time="8:30am" facilitator="Lance Kelly" title="Morning fitness"/>
            <SessionItem time="8:40am" facilitator="Marsjey Hymn" title="Morning devotional 1" link={true}/>
            <SessionItem time="9:00am to 10:00am" title="Breakfast" slotFill={ 2 }/>
            <SessionItem time="10:00am to 11:00am" facilitator="Myra Salinas" title="Sabbath School" slotFill={ 2 } link={true}/>
            <SessionItem time="11:00am to 11:30am"/>
            <SessionItem time="11:30am to 1:00pm" facilitator="Marc Lovem" title="Butterfly effect" slotFill={ 3 } link={true}/>
            <SessionItem time="1:00pm to 1:30pm"/>
            <SessionItem time="1:30pm to 2:30pm" title="Lunch" slotFill={ 2 }/>
            <SessionItem time="2:30pm to 3:00pm" title="Nature walk" link={true}/>
            <SessionItem time="3:00pm to 3:30pm"/>
            <SessionItem time="3:30pm to 5:00pm" facilitator="Mellory May & *" title="Ladies & Gentlemen" slotFill={ 3 } link={true}/>
            <SessionItem time="5:00pm to 5:30pm"/>
            <SessionItem time="5:30pm to 6:00pm" facilitator="Beverly Kate" title="Evening devotional 2" link={true}/>
            <SessionItem time="6:00pm to 7:00pm" title="Dinner" slotFill={ 2 }/>
            <SessionItem time="7:00pm to 10:00pm" title="Gym" slotFill={ 6 } link={true}/>
            <SessionItem time="10:00pm to 10:30pm" slotFill={ 2 }/>
            <SessionItem time="10:30pm to 11:00pm" title="Lights out"/>
        </>
    ;

    const sundayContent = 
        <>
            <SessionItem time="8:30am" facilitator="Lance Kelly" title="Morning fitness"/>
            <SessionItem time="8:40am" facilitator="Cherlynn De Asis" title="Morning devotional 2" link={true}/>
            <SessionItem time="9:00am to 10:00am" title="Breakfast" slotFill={ 2 }/>
            <SessionItem time="10:00am to 11:30am" facilitator="Myra Salinas" title="Understanding myself & others" slotFill={ 3 } link={true}/>
            <SessionItem time="11:30am to 12:00pm"/>
            <SessionItem time="12:00am to 1:00pm" facilitator="Guido Clement" title="My body is a temple" slotFill={ 2 } link={true}/>
            <SessionItem time="1:00pm to 1:30pm"/>
            <SessionItem time="1:30pm to 2:30pm" title="Lunch" slotFill={ 2 }/>
            <SessionItem time="2:30pm to 3:30pm" facilitator="Pastor Bon" title="Effective decision-making" slotFill={ 2 } link={true}/>
            <SessionItem time="3:30pm to 4:00pm"/>
            <SessionItem time="4:00pm to 5:00pm" facilitator="Marcello Casipit" title="Interpersonal proficiency" slotFill={ 2 } link={true}/>
            <SessionItem time="5:00pm to 8:00pm" facilitator="Pia Marie & Joseph Daniel" title="Cooking class & BBQ Dinner" slotFill={ 6 } link={true}/>
            <SessionItem time="8:00pm to 8:30pm"/>
            <SessionItem time="8:30pm to 9:00pm" facilitator="Marc Vicuna" title="Evening devotional 3" link={true}/>
            <SessionItem time="9:00pm to 10:00pm" title="Hot choco / Tea time" slotFill={ 2 }/>
            <SessionItem time="10:00pm to 11:00pm" slotFill={ 2 }/>
            <SessionItem time="10:30pm to 11:00pm" title="Lights out"/>
        </>
    ;

    const mondayContent = 
        <>
            <SessionItem time="8:30am" facilitator="Lance Kelly" title="Morning fitness"/>
            <SessionItem time="8:40am" facilitator="Cybill Lorraine" title="Morning devotional 1" link={true}/>
            <SessionItem time="9:00am to 10:00am" title="Breakfast" slotFill={ 2 }/>
            <SessionItem time="10:00am to 11:00am" facilitator="Mellory May" title="Management - time & money" slotFill={ 2 } link={true}/>
            <SessionItem time="11:00am to 11:30am"/>
            <SessionItem time="11:30am to 12:30pm" facilitator="Myra Salinas" title="Resolution" slotFill={ 2 } link={true}/>
            <SessionItem time="12:30pm to 1:30pm" title="Packup time!" slotFill={ 2 }/>
            <SessionItem time="1:30pm to 2:30pm" title="Lunch" slotFill={ 2 }/>
            <SessionItem time="2:30pm to 6:00pm" title="Hike" slotFill={ 7 } link={true}/>
            <SessionItem time="6:00pm to 7:00pm" title="Dinner" slotFill={ 2 }/>
            <SessionItem time="7:00pm to 9:00pm" title="Convoy travel" slotFill={ 4 } link={true}/>
        </>
    ;
    
    return (
        <div className='schedule__wrapper'>
            <h2 className='schedule__title'>Daily schedule</h2>

            <div className='schedule__inner'>
                <div className='schedule__time'>
                    <span>8:30am</span>
                    <span>8:40am</span>
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

                <div className='schedule__details-wrapper' data-accordion-parent="schedule">
                    <Accordion title='Friday' id="friday" subtitle='Kick-off' content={ fridayContent } open={ true } parent="schedule"/>
                    <Accordion title='Saturday' id='saturday' subtitle='Getting Oriented' content={ saturdayContent } parent="schedule"/>
                    <Accordion title='Sunday' id='sunday' subtitle='Myself in the Community' content={ sundayContent } parent="schedule"/>
                    <Accordion title='Monday' id='monday' subtitle='Practical Measures' content={ mondayContent } parent="schedule"/>
                </div>
            </div>
        </div>
    )
}