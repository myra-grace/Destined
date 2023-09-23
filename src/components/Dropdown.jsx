import '../styles/components/dropdown.scss'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function Dropdown(props) {
    const { id, title, time, facilitator, content, details, open, parent } = props;
    const [ expand, setExpand ] = useState(open);
    const htmlId = title.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').replace('-&-', '-').toLowerCase();
    
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
        <div aria-label={ title } id={ htmlId } className='dropdown__details' data-state={ expand ? 'open' : 'close' }>
            <h3 className='dropdown__title' onClick={ toggleExpand }>{title}<FontAwesomeIcon icon={faAngleDown} /></h3>
            <div className='dropdown__content-wrapper'>
                <p>{time}{ facilitator ? <span> - {facilitator}</span> : null}</p>
                <div className='dropdown__content'>
                    { content }
                </div>
                { details ?
                    <div className='dropdown__content-details'>
                        <h4>More Details</h4>
                        { details }
                    </div>
                : null }
            </div>
        </div>
    );
}