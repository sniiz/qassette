import "./App.css";

function App() {
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
            v0.0.0
          </code>
        </div>
        <div className="input">
          <input type="text" placeholder="enter a song name or a yt url" />
          <div className="add-button">play</div>
        </div>
      </body>
    </>
  );
}

export default App;
