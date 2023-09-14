import '../styles/components/accordion.scss'
import { useState } from "react";

export function Accordion(props) {
    const { title, subtitle, content, open } = props;
    const [ expand, setExpand ] = useState(open);

    const toggleExpand = () => setExpand((prevExpand) => !prevExpand);

    return (
        <div aria-label={title + ' schedule'} className='accordion__details' onClick={ toggleExpand }>
            <div className='accordion__inner' data-state={ expand ? 'open' : 'close' }>
                <h3 className='accordion__title'>{ title }</h3>
                {subtitle ? <span className='accordion__subtitle'>{ subtitle }</span> : null}
                <div className='accordion__content'>
                    { content }
                </div>
            </div>
        </div>
    );
}