import "./App.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [spin, setSpin] = useState(false);
  const startPlayback = (url) => {
    if (!url) return;
    console.log("i have been clicked");
    setUrl("");
    setSpin(true);
  };
  return (
    <>
      <body>
        <div className="header-bar">
          <h1
            style={{
              marginLeft: "20px",
            }}
            className="white"
          >
            qassette
          </h1>
          <code
            className="mid version"
            onClick={() => {
              window
                .open("https://github.com/sniiz/qassette", "_blank")
                .focus();
            }}
          >
            VERY MUCH WIP
          </code>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="enter a song name or a yt url"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
          />
          <div className="add-button" onClick={() => startPlayback(url.trim())}>
            play
          </div>
        </div>
        <div className="cassette-body">
          <img
            className={(spin ? "spinning " : "") + "cassette-rolls"}
            src="./assets/roll.svg"
            alt=""
          />
          <img
            className={(spin ? "spinning " : "") + "cassette-rolls"}
            src="./assets/roll.svg"
            alt=""
          />
        </div>
        <div className="controls">
          <img
            src={`./assets/${spin ? "pause" : "play"}.svg`}
            alt=""
            className="control-button"
            onClick={() => {
              setSpin(!spin);
            }}
          />
        </div>
      </body>
    </>
  );
}

export default App;
