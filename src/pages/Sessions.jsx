import { Dropdown } from "../components/Dropdown";
import facilitatorsData from "../data/facilitators.json";
import '../styles/pages/sessions.scss';

export function Sessions() {
    let fridaySessions = [];
    let saturdaySessions = [];
    let sundaySessions = [];
    let mondaySessions = [];

    function handleSessions(facilitatorsData) {
        facilitatorsData.forEach(facilitator => {
            // Sort Friday
            facilitator.responsibilities.friday?.forEach(item => {
                if (item.session) {
                    fridaySessions.push(item);
                }
            });

            // Sort Saturday
            facilitator.responsibilities.saturday?.forEach(item => {
                if (item.session) {
                    saturdaySessions.push(item);
                }
            });

            // Sort Sunday
            facilitator.responsibilities.sunday?.forEach(item => {
                if (item.session) {
                    sundaySessions.push(item);
                }
            });

            // Sort Monday
            facilitator.responsibilities.monday?.forEach(item => {
                if (item.session) {
                    mondaySessions.push(item);
                }
            });
        });
    }

    function sortSessions(a, b) {
        const prev = a.time.split(' to ').shift().replace("h", "");
        const next = b.time.split(' to ').shift().replace("h", "");
        return prev - next;
    }

    handleSessions(facilitatorsData);
    fridaySessions.sort(sortSessions);
    saturdaySessions.sort(sortSessions);
    sundaySessions.sort(sortSessions);
    mondaySessions.sort(sortSessions);

    return (
        <div className="sessions container">
            <h1 className="sessions__title standard-padding">Sessions</h1>
            <p className="sessions__description container">Find out more about lectures, workshops, sermonettes, and other activities!</p>

            <h2 className="standard-padding">Friday</h2>
            {fridaySessions.map((item, index) => (
                <Dropdown title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} open={index === 0 ? true : false}/>
            ))}

            <h2 className="standard-padding standard-margin-top">Saturday</h2>
            {saturdaySessions.map((item, index) => (
                <Dropdown title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} open={index === 0 ? true : false}/>
            ))}

            <h2 className="standard-padding standard-margin-top">Sunday</h2>
            {sundaySessions.map((item, index) => (
                <Dropdown title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} open={index === 0 ? true : false}/>
            ))}

            <h2 className="standard-padding standard-margin-top">Monday</h2>
            {mondaySessions.map((item, index) => (
                <Dropdown title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} open={index === 0 ? true : false}/>
            ))}
        </div>
    )
}