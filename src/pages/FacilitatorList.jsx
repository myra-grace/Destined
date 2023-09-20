import { Link } from 'react-router-dom';
import facilitatorsData from "../data/facilitators.json";

export function FacilitatorList() {
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
            <h1>Facilitators list</h1>
            <ul>
                {
                    sortedParticipantsArray.map(item => (
                        <li><Link to={"/facilitators/" + encodeURI(item.id)}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}