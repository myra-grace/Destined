import { useParams } from "react-router-dom"
import { Dropdown } from "../components/Dropdown";
import facilitatorsData from "../data/facilitators.json";
import '../styles/pages/facilitators.scss'

export function Facilitators() {
    const { id } = useParams();

    let fridaySessions = [];
    let saturdaySessions = [];
    let sundaySessions = [];
    let mondaySessions = [];

    function findFacilitator(facilitatorId) {
        const facilitator = facilitatorsData.find(object => object.id === facilitatorId);
        return facilitator;
    }

    function handleDaySessions(userObject) {
        userObject.responsibilities.friday?.forEach(item => fridaySessions.push(item));
        userObject.responsibilities.saturday?.forEach(item => saturdaySessions.push(item));
        userObject.responsibilities.sunday?.forEach(item => sundaySessions.push(item));
        userObject.responsibilities.monday?.forEach(item => mondaySessions.push(item));
    }

    function sortSessions(a, b) {
        const prev = a.time.split(' to ').shift().replace("h", "");
        const next = b.time.split(' to ').shift().replace("h", "");
        return prev - next;
    }

    const userObject = findFacilitator(id);
    const userRole = userObject.role;
    const userGeneralResponsibilities = userObject.responsibilities.general;

    handleDaySessions(userObject);
    fridaySessions.sort(sortSessions);
    saturdaySessions.sort(sortSessions);
    sundaySessions.sort(sortSessions);
    mondaySessions.sort(sortSessions);

    return (
        <div className="container standard-padding">
            <h1 className="facilitators__name">
                <span className="type--pretitle">Welcome, { userRole }</span>{ userObject.name }
            </h1>

            {userGeneralResponsibilities ? 
                <p className="facilitators__responsibilities"><span className="facilitators__highlight">General responsibilities: </span>{userGeneralResponsibilities.map((item, index) => (
                        <span key={index}>{item}{index !== userGeneralResponsibilities.length -1 ? ", " : null}</span>
                    ))}
                </p> 
            : null}
            <p className="facilitators__thanks">Thank you for your contribution! Your efforts has made this event possible. God bless your willing participation.</p>

            <p className="facilitators__verse standard-padding standard-margin-top">"So whether you eat or drink or whatever you do, do it all for the glory of God."<span>- 1 Corinthians 10:31</span></p>

            <h2 className="facilitators__title standard-padding standard-margin-top top-divider">Daily Responsibilities</h2>
            <p className="facilitators__description container">Detailed reminders of your daily tasks, lectures, workshops, sermonettes, and other activities!</p>

            {fridaySessions.length > 0 ?
                <>
                    <h3 className="standard-padding"><span className="type--pretitle">Kick-off</span>Friday</h3>
                    {fridaySessions.map((item, index) => (
                        <Dropdown key={index} title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} details={item.task} open={index === 0 ? true : false}/>
                    ))}
                </>
            : null}

            {saturdaySessions.length > 0 ?
                <>
                    <h3 className="standard-padding standard-margin-top"><span className="type--pretitle">Getting Oriented</span>Saturday</h3>
                    {saturdaySessions.map((item, index) => (
                        <Dropdown key={index} title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} details={item.task} open={index === 0 ? true : false}/>
                    ))}
                </>
            : null}

            {sundaySessions.length > 0 ?
                <>
                    <h3 className="standard-padding standard-margin-top"><span className="type--pretitle">Myself in the Community</span>Sunday</h3>
                    {sundaySessions.map((item, index) => (
                        <Dropdown key={index} title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} details={item.task} open={index === 0 ? true : false}/>
                    ))}
                </>
            : null}

            {mondaySessions.length > 0 ?
                <>
                    <h3 className="standard-padding standard-margin-top"><span className="type--pretitle">Practical Measures</span>Monday</h3>
                    {mondaySessions.map((item, index) => (
                        <Dropdown key={index} title={item.title} time={item.time} facilitator={item.facilitator} content={item.description} details={item.task} open={index === 0 ? true : false}/>
                    ))}
                </>
            : null}
        </div>
    )
}