import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailsForm from "./components/DetailsForm/DetailsForm";
import ChooseTime from "./components/ChooseTime";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ImageContent from "./components/presetFeed/ImageContent";
import "./styles.css/App.css";

function App() {
  const initJsonObject = {
    ImageID: "",
    Feeling: "",
    UserName: "",
    PhoneNumber: "",
    Day: "",
    HourRange: "",
  };

  const [jsonObject, setjsonObject] = useState(initJsonObject);
  const [slide, setSlide] = useState(-1);

  return (
    <>
      <div className="container">
        <Header></Header>

        <div className="body">
          {slide === -1 && <WelcomePage slide={slide} setSlide={setSlide} />}

          {slide === 0 && (
            <ImageContent
              setjsonObject={setjsonObject}
              slide={slide}
              setSlide={setSlide}
            />
          )}
          {/* {<OptionalPartner setjsonObject={setjsonObject} />} */}
          {slide === 1 && (
            <DetailsForm
              setjsonObject={setjsonObject}
              setSlide={setSlide}
              slide={slide}
            />
          )}
          {slide === 2 && (
            <ChooseTime
              setjsonObject={setjsonObject}
              jsonObject={jsonObject}
              setSlide={setSlide}
              slide={slide}
            />
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
