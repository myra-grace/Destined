import { Link } from 'react-router-dom';
import facilitatorsData from "../data/facilitators.json";

export function Portal() {
    let sortedParticipantsArray = facilitatorsData.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }

        if (a.name > b.name) {
            return 1;
        }

        return 0;
    });

    return (
        <div className='container standard-padding'>
            <h1>Participant portal</h1>
            <ul>
                {
                    sortedParticipantsArray.map(item => (
                        <li key={item.id}><Link className='link link--hover-underline' to={"/portal/" + encodeURI(item.id)}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}