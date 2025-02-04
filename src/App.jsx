import React, { useEffect, useState } from "react";
import "./App.css";
import Forest from "./assets/Images/Forest.png";
import { Container, Content } from "./__Organism/Container/Container";
import { DivTxt, Txt } from "./__Atom/Text/Text";
import { InfoDiv, SunMorning } from "./__Molecule/Information/Information";
import Sun from "./assets/Images/Sun.png";
import { ArrowMore, Button } from "./__Atom/Button/Button";
import Arrow from "./assets/Images/Arrow.png";
import { HiddenInfo } from "./__Molecule/HiddenInfo/HiddenInfo";

function App() {
  const [time, setTime] = useState(GetCurrentTime());
  const [location, setLocation] = useState(null);

  function GetCurrentTime() {
    return new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(GetCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    GetLocation();
  }, []);

  function GetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("Geolocation not supported");
    }
  }

  async function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API_KEY = "27f7d922bb80535e1fdd7270fcc5c905";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);

      if (data) {
        const city = data.name;
        const country = data.sys.country;
        setLocation(`${city}, ${country}`);
      } else {
        setLocation("Location not found");
      }
    } catch (error) {
      setLocation("Failed to fetch location");
    }
  }

  function error() {
    setLocation("Location permission denied");
  }

  const [clicked, setClicked] = useState(false);

  function Click() {
    setClicked(!clicked);
  }
  return (
    <>
      <Container>
        <img className="forest" src={Forest} />
        <Content clicked={clicked}>
          <DivTxt>
            <Txt clicked={clicked}>
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </Txt>
          </DivTxt>
          <div className="below">
            <InfoDiv>
              <SunMorning>
                <img className="sun" src={Sun} alt="sun" />
                <p className="morning">GOOD MORNING, IT’S CURRENTLY</p>
              </SunMorning>
              <div className="flex">
                <h1 className="time">{time}</h1>
                <h1 className="BST">BST</h1>
              </div>
              <h1 className="location"> IN {location}</h1>
            </InfoDiv>
            <Button onClick={Click}>
              <p className="more">MORE</p>
              <ArrowMore>
                <img
                  src={Arrow}
                  className={clicked ? "arrow" : "arrow_plus"}
                  alt="Arrow"
                />
              </ArrowMore>
            </Button>
          </div>
        </Content>
        <HiddenInfo clicked={clicked}></HiddenInfo>
      </Container>
    </>
  );
}

export default App;
