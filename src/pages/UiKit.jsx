import '../styles/pages/ui-kit.scss';

export function UiKit() {
    return (
        <>
            <div className='ui-kit__wrapper ui-kit__typography-outer'>
                <div className='ui-kit__typography-inner'>
                    <h1 className='type--accent'>Accent type</h1>
                    <p>Paragraph text lorem ipsum dolor. Default type sit amet constructeur.</p>
                    <span className='type--subtitle'>Subtitle font type. Button / link font type.</span>
                </div>

                <div className='ui-kit__typography-inner'>
                    <h1>Heading type 1</h1>
                    <h2>Heading type 2</h2>
                    <h3>Heading type 3</h3>
                    <h4>Heading type 4</h4>
                    <h5>Heading type 5</h5>
                    <h6>Heading type 6</h6>
                </div>
            </div>

            <div className='ui-kit__wrapper ui-kit__buttons-outer'>
                <a className='link link--hover-underline' href="/">Link</a>
                <button className='button button--primary'>Button primary</button>
                <button className='button button--secondary'>Button secondary</button>
                <button className='button button--tertiary'>Button tertiary</button>
            </div>
        </>
    )
}