import playIcon from "../assets/icon-play.svg";
import newWindowIcon from "../assets/icon-new-window.svg";
import PropTypes from "prop-types";

export const Info = ({ meaning }) => {
  const playAudio = () => {
    const audioUrl = meaning[0].phonetics[0].audio;
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="info-section">
      <div className="heading-section">
        <div className="title">
          <h1 className="heading">{meaning && meaning[0].word}</h1>
          <p className="speech">{meaning && meaning[0].phonetics[0].text}</p>
        </div>
        <div className="play-icon">
          <button onClick={playAudio}>
            {meaning && 
            <img src={playIcon} alt="play-icon" />
            }
          </button>
        </div>
      </div>
      <>
        <div className="noun">
            {meaning &&
            <>
                <p>noun</p>
                <hr />
            </>
             }
        </div>
        <div className="meaning-section">
            {meaning &&
              <h4>Meaning</h4>
            }
          
          <ul>
          {meaning && meaning[0].meanings[0].definitions.map((definition, index) =>(
                <li key={index}>{definition.definition}</li>
            ))}
          </ul>
        </div>
        <div className="synonyms">
          <p>
          {meaning && <>Synonyms</>}
             
            {meaning && meaning[0].meanings[0].synonyms.map((synonym, index) =>(
                <span key={index}>{synonym}</span>
            ))}
          </p>
        </div>
      </>
      <>
        <div className="verb">
            {meaning && 
                <>
                <h4>verb</h4>
                <hr />
                </>            
            }
        </div>
        <div className="verb-meaning">
            {meaning && 
                <p>Meaning</p>
            }
          <ul>
          {meaning && meaning[0].meanings[0].definitions.map((definition, index) =>(
                <li key={index}>{definition.definition}</li>
            ))}
          </ul>
        </div>
      </>
      {meaning && <hr />}
      <div className="footer">
        {meaning &&
            <p>Source</p>
        }
        {meaning &&
          meaning[0].sourceUrls.map((url, index) => (
            <a href={url} key={index} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          ))
        }
        {meaning &&
            <img src={newWindowIcon} alt="new-window-icon" />
        }
      </div>
    </div>
  );
};

Info.propTypes = {
  meaning: PropTypes.any,
};
