import '../styles/components/dropdown.scss'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function Dropdown(props) {
    const { id, title, time, facilitator, content, open, parent } = props;
    const [ expand, setExpand ] = useState(open);
    
    function toggleExpand() {
        if (parent) {
            const parentElement = document.querySelector(`[data-dropdown-parent="${parent}"]`);
            const childdropdowns = parentElement.querySelectorAll('[data-id]');

            childdropdowns.forEach(dropdown => {
                if (dropdown.dataset.id === id) {
                    dropdown.dataset.state = 'open';
                } else {
                    dropdown.dataset.state = 'close';
                }
            });
        } else {
            setExpand((prevExpand) => !prevExpand);
        }
    }

    return (
        <div aria-label={ title } className='dropdown__details' data-state={ expand ? 'open' : 'close' }>
            <h3 className='dropdown__title' onClick={ toggleExpand }>{title}<FontAwesomeIcon icon={faAngleDown} /></h3>
            <div className='dropdown__content-wrapper'>
                <p>{time}{ facilitator ? <span> - {facilitator}</span> : null}</p>
                <div className='dropdown__content'>
                    { content }
                </div>
            </div>
        </div>
    );
}