import '../styles/components/icon-with-text.scss';

export function IconWithText(props) {
    const {title, link, icon, address} = props;

    return (
        <div className='icon-with-text__wrapper'>
            Icon with text card component here
            <p>Title</p>
            <a>
                {icon}
            </a>
            
            <p>Address</p>
        </div>
    )
}