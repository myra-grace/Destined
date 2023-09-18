import '../styles/components/icon-with-text.scss';

export function IconWithText(props) {
    const {title, link, icon, address} = props;

    return (
        <div className='icon-with-text__wrapper'>
            Icon with text card component here
            <p>Title</p>
            <a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.606651295613!2d-74.75519892315843!3d46.27792087109891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf854600b4f591%3A0xe269ac4590b55539!2s301%20Rue%20de%20la%20Montagne%2C%20Les%20Laurentides%2C%20QC%20J0T%201H0!5e0!3m2!1sen!2sca!4v1695000247837!5m2!1sen!2sca" 
width="600" 
height="450" 
style={{ border:"0" }}
allowfullscreen="" 
loading="lazy" r
eferrerpolicy="no-referrer-when-downgrade">
</iframe>
                {icon}
            </a>
            
            <p>Address</p>
        </div>
    )
}