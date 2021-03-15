import "./App.css";
import "./style.css";
import image1 from "./imageInSrc.jpg";
import image2 from "./imageInPublic.jpg";
import video from "./myVideo.mp4";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                    <h1 className="title red">Your name here</h1>

                    <br />

                    <img width="320" height="240" src={image1} alt="profile" />

                    <br />

                    <img width="320" height="240" src={image2} alt="profile" />
                </div>

                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4" />
                </video>
            </header>
        </div>
    );
}

export default App;
