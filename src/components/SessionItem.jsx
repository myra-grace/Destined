import { Link } from 'react-router-dom';
import '../styles/components/session-item.scss';

export function SessionItem(props) {
    const { time, facilitator, title, slotFill, link } = props;
    const htmlId = title?.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').replace('-&-', '-').toLowerCase();
    const calculatedFill = "calc(3rem * " + slotFill + ")";

    return (
        <div className='session-item__wrapper' style={ slotFill ? { height: calculatedFill } : null }>
            { link ? 
                <Link className='session-item__link link link--hover-underline' to={ link }>
                    <span aria-label='time' className='hide'>{ time }</span>
                    <span aria-label='facilitator'>{ facilitator }</span>
                    <h2>{ title }</h2>
                </Link>
            :
                <>
                    <span aria-label='time' className='hide'>{ time }</span>
                    <span aria-label='facilitator'>{ facilitator }</span>
                    <h2>{ title }</h2>
                </>
            }
            
        </div>
    )
}