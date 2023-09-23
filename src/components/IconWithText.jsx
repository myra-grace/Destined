import '../styles/components/icon-with-text.scss';

export function IconWithText(props) {
    const {title, link, icon, address} = props;

    return (
        <div className='icon-with-text__wrapper'>
            Icon with text card component here
            <p>Cottage</p>
            <a href="https://maps.app.goo.gl/y2jXJWA9Q5gL7y9u7">
                {icon}
                
            </a>
            
            <p>301 Rue de la Montagne, Les Laurentides, QC J0T 1H0</p>
        </div>
    )
}