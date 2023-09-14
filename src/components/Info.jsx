import playIcon from '../assets/icon-play.svg';
import newWindowIcon from '../assets/icon-new-window.svg';

export const Info = () => {
  return (
    <div className="info-section">
        <div className='heading-section'>
        <div className='title'>
            <h1 className="heading">Keyboard</h1>
            <p className='speech'>/ˈkiːbɔːd/</p>
        </div>
        <div className='play-icon'>
            <button><img src={playIcon} alt="play-icon" /></button>
        </div>
        </div>
        <div>
        <div className='noun'>
            <p>noun</p>
            <hr />
        </div>
        <div className='meaning-section'>
            <h4>Meaning</h4>
            <ul>
                <li>(etc.) A set of keys used to operate a typewriter, computer etc.
                </li>
                <li>A component of many instruments including the piano, organ, and harpsichord consisting of usually 
                    black and white keys that cause different tones to be produced when struck.
                </li>
                <li>A device with keys of a musical keyboard, used to control electronic sound-producing 
                    devices which may be built into or separate from the keyboard device.
                </li>
            </ul>
        </div>
        <div className='synonyms'>
            <p>Synonyms<span> electronic keyboard</span></p>
        </div>
        </div>
        <div>
        <div className='verb'>
            <h4>verb</h4>
            <hr />
        </div>
        <div className='verb-meaning'>
            <p>Meaning</p>
            <ul>
                <li>To type on a computer keyboard.</li>
                <p>“Keyboarding is the part of this job I hate the most.”</p>
            </ul>
        </div>
        </div>
        <hr />
        <div className='footer'> 
            <p>Source</p>
            <a href='https://en.wiktionary.org/wiki/keyboard'>https://en.wiktionary.org/wiki/keyboard</a>
            <img src={newWindowIcon} alt='new-window-icon' />
        </div>
    </div>
  )
}
