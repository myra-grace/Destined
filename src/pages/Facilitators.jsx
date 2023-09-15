import { useParams } from "react-router-dom"
import { Accordion } from "../components/Accordion";

export function Facilitators() {
    const { id } = useParams();
    const userId = decodeURI(id).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');
    console.log("userId: ", userId);

    // Promise here
    function findUser(userId) {
        return 'Object here';
    }

    function handleFridayContent(userObject) {
        const friday = userObject.responsibilities.friday;
        let fridayContentArray = [];

        friday.forEach(task => {
            fridayContentArray.push('build html here')
        });

        return fridayContentArray;
    }

    const userObject = findUser();
    const userRole = 'get from user object';
    const userGeneralResponsibilities = 'get from user object';

    return (
        <>
            <h1 className="facilitators__welcome">Welcome, { decodeURI(id) }</h1>
            { userRole ? <h2>{ userRole }</h2> : null }
            { userGeneralResponsibilities ? <p>{userGeneralResponsibilities}</p> : null }

            {/* <Accordion title='Friday' subtitle='Kick-off' content={ fridayContent } open={ true }/>
            <Accordion title='Saturday' subtitle='Getting Oriented' content={ saturdayContent }/>
            <Accordion title='Sunday' subtitle='Myself in the Community' content={ sundayContent }/>
            <Accordion title='Monday' subtitle='Practical Measures' content={ mondayContent } open={ true }/> */}
        </>
    )
}