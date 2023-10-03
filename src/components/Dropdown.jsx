import '../styles/components/dropdown.scss'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function Dropdown(props) {
    const { id, title, time, facilitator, content, details, open, parent, link } = props;
    const [ expand, setExpand ] = useState(open);
    const htmlId = link === true ? title?.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').replace('-&-', '-').toLowerCase() : link;
    const hash = window.location.hash.substring(1);
    
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

    function getHashPath() {
        if (hash && hash === htmlId && expand === false) {
            setExpand(true);
        }
    }

    getHashPath();

    return (
        <div aria-label={ title } id={ htmlId } className='dropdown__details' onLoad={ getHashPath } data-state={ expand ? 'open' : 'close' }>
            <h3 className='dropdown__title' onClick={ toggleExpand }>{title}<FontAwesomeIcon icon={faAngleDown} /></h3>
            <div className='dropdown__content-wrapper'>
                <p>{time}{ facilitator ? <span> - {facilitator}</span> : null}</p>
                <div className='dropdown__content' dangerouslySetInnerHTML={{ __html: content }}></div>
                { details ?
                    <div className='dropdown__content-details'>
                        <h4>More Details</h4>
                        <div dangerouslySetInnerHTML={{ __html: details }}></div>
                    </div>
                : null }
            </div>
        </div>
    );
}