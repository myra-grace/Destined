import '../styles/components/accordion.scss'
import { useState } from "react";

export function Accordion(props) {
    const { id, title, subtitle, content, open, parent } = props;
    const [ expand, setExpand ] = useState(open);
    
    function toggleExpand() {
        if (parent) {
            const parentElement = document.querySelector(`[data-accordion-parent="${parent}"]`);
            const childAccordions = parentElement.querySelectorAll('[data-id]');

            childAccordions.forEach(accordion => {
                console.log("accordion: ", accordion);
                if (accordion.dataset.id == id) {
                    accordion.dataset.state = 'open';
                } else {
                    accordion.dataset.state = 'close';
                }
            });
        } else {
            setExpand((prevExpand) => !prevExpand);
        }
    }

    return (
        <div aria-label={ title + ' schedule' } className='accordion__details' onClick={ toggleExpand }>
            <div className='accordion__inner' data-id={ id } data-state={ expand ? 'open' : 'close' }>
                <h3 className='accordion__title'>{ title }</h3>
                {subtitle ? <span className='accordion__subtitle'>{ subtitle }</span> : null}
                <div className='accordion__content'>
                    { content }
                </div>
            </div>
        </div>
    );
}