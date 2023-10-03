import '../styles/components/icon-with-text.scss';
import '../styles/helpers.scss';

export function IconWithText(props) {
    const {title, link, icon, content} = props;

    return (
        <div className='icon-with-text__wrapper'>
            <a className='icon-with-text__title link link--hover-underline hide-desktop-down' href={link} target="_blank">{title}</a>
            <a className='icon-with-text__icon' href={link} target="_blank">
                {icon}
            </a>
            
            <div className='icon-with-text__content'>
                <a className='icon-with-text__title link link--hover-underline hide-desktop' href={link} target="_blank">{title}</a>
                <div>{content}</div>
            </div>
        </div>
    )
}