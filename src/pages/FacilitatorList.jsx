import { Link } from 'react-router-dom';

export function FacilitatorList() {
    return (
        <>
            <h1>Facilitators list</h1>
            <ul>
                <li><Link to={"/facilitators/" + encodeURI("Myra-Grace")}>Myra-Grace</Link></li>
                <li><Link to={"/facilitators/" + encodeURI("Marc Lovem")}>Marc Lovem</Link></li>
            </ul>
        </>
    );
}