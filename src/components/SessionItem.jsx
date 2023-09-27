import { HashLink } from 'react-router-hash-link';
import '../styles/components/session-item.scss';

export function SessionItem(props) {
    const { time, facilitator, title, slotFill, link } = props;
    const htmlId = link === true ? title?.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').replace('-&-', '-').toLowerCase() : link;
    const calculatedFill = "calc(3rem * " + slotFill + ")";

    return (
        <div className='session-item__wrapper' style={ slotFill ? { height: calculatedFill } : null }>
            { link ? 
                <HashLink className='session-item__link link link--hover-underline' to={ '/sessions#' + htmlId }>
                    <span aria-label='time' className='hide'>{ time }</span>
                    <span aria-label='facilitator'>{ facilitator }</span>
                    <h2 className='session-item__title' dangerouslySetInnerHTML={{ __html: title }}></h2>
                </HashLink> 
            :
                <>
                    <span aria-label='time' className='hide'>{ time }</span>
                    <span aria-label='facilitator'>{ facilitator }</span>
                    <h2 className='session-item__title' dangerouslySetInnerHTML={{ __html: title }}></h2>
                </>
            }
            
        </div>
    )
}