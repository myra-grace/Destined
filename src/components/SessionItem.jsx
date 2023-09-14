import '../styles/components/session-item.scss';

export function SessionItem(props) {
    const { time, facilitator, title, slotFill } = props;
    const calculatedFill = "calc(3rem * " + slotFill + ")";

    return (
        <div className='session-item__wrapper' style={ slotFill ? { height: calculatedFill } : null }>
            <span aria-label='time' className='hide'>{ time }</span>
            <span aria-label='facilitator'>{ facilitator }</span>
            <h2>{ title }</h2>
        </div>
    )
}