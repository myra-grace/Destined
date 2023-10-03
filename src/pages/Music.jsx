import '../styles/pages/music.scss'

export function Music() {
    return (
        <div className="music__wrapper container standard-padding">
            <h1 className="music__grand-title">Music List</h1>
            <h2 className="music__title standard-margin-top"><span className="type--pretitle">Theme song by Faith First</span>Destined for Greatness</h2>
            <a class="button button--primary standard-margin-top" href="https://docs.google.com/document/d/1AD6mMXPnfdhX_ZICg06ZxtiLavkTB-bJmySSOgAuFW8/edit?usp=sharing#heading=h.hw7brlet1nt" target="_blank">See theme song chords</a>
            
            <h3 className="standard-margin-top">Verse</h3>
            <p>
                <span>A fresh wind is blowing</span>
                <span>It's the wind of God's Spirit</span>
                <span>Be still and know His voice</span>
                <span>Listen and you'll hear it</span>
            </p>
            <p>
                <span>A new call is stirring</span>
                <span>Increasing in power</span>
                <span>Feel the Spirit releasing</span>
                <span>His strength by the hour</span>
            </p>
            <h3 className="standard-margin-top">Pre-chorus</h3>
            <p>
                <span>We will rise to the call</span>
                <span>We will stand and obey</span>
                <span>We are warriors who's weapon</span>
                <span>Is God's highest praise</span>
            </p>
            <p>
                <span>The Bridegroom is coming</span>
                <span>So rise up, oh, Bride</span>
                <span>Let His mighty kingdom triumph</span>
                <span>Let us give our very lives</span>
            </p>
            <h3 className="standard-margin-top">Chorus</h3>
            <p>
                <span>Destined for greatness</span>
                <span>With the passionate faith</span>
                <span>Moving in His power</span>
                <span>Clothed in garments of praise</span>
            </p>
            <p>
                <span>Strong in the Spirit</span>
                <span>One holy nation</span>
                <span>True to the calling of</span>
                <span>Our great salvation</span>
                <span>We are destined, destined for greatness</span>
            </p>
            <h3 className="standard-margin-top">Verse 2</h3>
            <p>
                <span>To love the unlovable</span>
                <span>Teach the unteachable</span>
                <span>Touch the untouchable</span>
                <span>Reach the unreachable</span>
            </p>
            <p>
                <span>See the unseeable</span>
                <span>Shake the unshakeable</span>
                <span>Heal the unhealable</span>
                <span>Break the unbreakable</span>
            </p>
            <h3 className="standard-margin-top">Pre-chorus</h3>
            <p>
                <span>We will rise to the call</span>
                <span>We will stand and obey</span>
                <span>We are warriors who's weapon</span>
                <span>Is God's highest praise</span>
            </p>
            <p>
                <span>The Bridegroom is coming</span>
                <span>So rise up, oh, Bride</span>
                <span>Let His mighty kingdom triumph</span>
                <span>Let us give our very lives</span>
            </p>
            <h3 className="standard-margin-top">Chorus</h3>
            <p>
                <span>Destined for greatness</span>
                <span>With the passionate faith</span>
                <span>Moving in His power</span>
                <span>Clothed in garments of praise</span>
            </p>
            <p>
                <span>Strong in the Spirit</span>
                <span>One holy nation</span>
                <span>True to the calling of</span>
                <span>Our great salvation</span>
                <span>We are destined</span>
                <span>We are destined</span>
                <span>We are destined</span>
                <span>Destined for greatness</span>
            </p>

            {/* List of songs as links to lyrics */}
            <h2 className="standard-padding standard-margin-top">Links to song lyrics</h2>
            <ol>
                <li><a className='link link--hover-underline' href="/">Song title</a></li>
                <li><a className='link link--hover-underline' href="/">Song title</a></li>
            </ol>
        </div>
    )
}