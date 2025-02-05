import React, { useEffect, useState } from "react";
import "./App.css";
import Forest from "./assets/Images/Forest.png";
import { Container, Content } from "./__Organism/Container/Container";
import { DivTxt, Txt } from "./__Atom/Text/Text";
import { InfoDiv, SunMorning } from "./__Molecule/Information/Information";
import Sun from "./assets/Images/Sun.png";
import { ArrowMore, Button } from "./__Atom/Button/Button";
import Arrow from "./assets/Images/Arrow.png";
import Night from "./assets/Images/Night.png";
import Moon from "./assets/Images/Moon.png";
import {
  HiddenInfo,
  Weeks,
  ZoneYear,
} from "./__Molecule/HiddenInfo/HiddenInfo";
import {
  Continent,
  CurrTimezone,
  Line,
  Timezone,
} from "./__Atom/TimeZone/TimeDay";
import { DayofYear, DayNum, DayYear } from "./__Atom/DayOfYear/DayOfYear";
import { DayOfWeek, WeekDay, WeekNum } from "./__Atom/DayOfWeek/DayOfWeek";
import {
  NumberWeek,
  NumWeek,
  WeekNumber,
} from "./__Atom/WeekNumber/WeekNumber";

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
  const [night, setNight] = useState(false);

  useEffect(() => {
    const hour = Number(time.split(":")[0]);
    if (hour >= 20 || hour < 7) {
      setNight(true);
    } else {
      setNight(false);
    }
  }, [time]);

  return (
    <>
      <Container>
        <img className="forest" src={night ? Night : Forest} />
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
                <img
                  className="sun"
                  src={night ? Moon : Sun}
                  alt={night ? "Moon" : "Sun"}
                />
                <p className="morning">
                  {night
                    ? "GOOD EVENING, IT’S CURRENTLY"
                    : "GOOD MORNING, IT’S CURRENTLY"}
                </p>
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
        <HiddenInfo clicked={clicked} night={night}>
          <ZoneYear>
            <Timezone>
              <CurrTimezone clicked={clicked} night={night}>
                CURRENT TIMEZONE
              </CurrTimezone>
              <Continent clicked={clicked} night={night}>
                Europe/London
              </Continent>
            </Timezone>
            <DayofYear>
              <DayYear clicked={clicked} night={night}>
                Day of the year
              </DayYear>
              <DayNum clicked={clicked} night={night}>
                295
              </DayNum>
            </DayofYear>
          </ZoneYear>
          <Line clicked={clicked} night={night}></Line>
          <Weeks>
            <DayOfWeek>
              <WeekDay clicked={clicked} night={night}>
                Day of the week
              </WeekDay>
              <WeekNum clicked={clicked} night={night}>
                5
              </WeekNum>
            </DayOfWeek>
            <WeekNumber>
              <NumberWeek clicked={clicked} night={night}>
                Week number
              </NumberWeek>
              <NumWeek clicked={clicked} night={night}>
                42
              </NumWeek>
            </WeekNumber>
          </Weeks>
        </HiddenInfo>
      </Container>
    </>
  );
}

export default App;
