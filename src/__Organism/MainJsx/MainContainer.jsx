import React, { useEffect, useState } from "react";
import "../../App.css";
import Forest from "../../assets/Images/Forest.png";
import { Container, Content } from "../../__Organism/Container/Container";
import { Author, DivTxt, Rev, Txt } from "../../__Atom/Text/Text";
import { InfoDiv, SunMorning } from "../../__Molecule/Information/Information";
import Sun from "../../assets/Images/Sun.png";
import Reverse from "../../assets/Images/reverse.png";
import { ArrowMore, Button } from "../../__Atom/Button/Button";
import Arrow from "../../assets/Images/Arrow.png";
import Night from "../../assets/Images/Night.png";
import Moon from "../../assets/Images/Moon.png";
import {
  HiddenInfo,
  Weeks,
  ZoneYear,
} from "../../__Molecule/HiddenInfo/HiddenInfo";
import {
  Continent,
  CurrTimezone,
  Line,
  Timezone,
} from "../../__Atom/TimeZone/TimeDay";
import { DayofYear, DayNum, DayYear } from "../../__Atom/DayOfYear/DayOfYear";
import { DayOfWeek, WeekDay, WeekNum } from "../../__Atom/DayOfWeek/DayOfWeek";
import {
  NumberWeek,
  NumWeek,
  WeekNumber,
} from "../../__Atom/WeekNumber/WeekNumber";

function MainContainer() {
  const [time, setTime] = useState(GetCurrentTime());
  const [wkDay, setWkDay] = useState(GetWeekDay());
  const [dayOfYear, setDayOfYear] = useState(GetDayOfYear());
  const [weekOfYear, setWeekOfYear] = useState(GetWeekOfYear());
  const [location, setLocation] = useState("...");
  const [continent, setContinent] = useState("...");
  const [clicked, setClicked] = useState(false);
  const [quote, setQuote] = useState(false);
  const [night, setNight] = useState(false);

  function GetCurrentTime() {
    return new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
  }

  function GetWeekDay() {
    return new Date().getDay();
  }

  function GetDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function GetWeekOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now - start;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.ceil(diff / oneWeek);
  }

  function error() {
    setLocation("Location permission denied");
  }

  function ChangeQuote() {
    setQuote(!quote);
  }

  function Click() {
    setClicked(!clicked);
  }

  useEffect(() => {
    const hour = Number(time.split(":")[0]);
    if (hour >= 20 || hour < 7) {
      setNight(true);
    } else {
      setNight(false);
    }
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(GetCurrentTime());
      setWkDay(GetWeekDay());
      setDayOfYear(GetDayOfYear());
      setWeekOfYear(GetWeekOfYear());
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
    const API_KEY = "4cf5d409c0414717b0e39cc6b8b57946";

    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

      if (data.results.length > 0) {
        const city =
          data.results[0].components.city ||
          data.results[0].components.town ||
          data.results[0].components.village;

        const country = data.results[0].components.country;
        const continent = data.results[0].components.continent;
        setLocation(`${city}, ${country}`);
        setContinent(`${continent}/${city}`);
      } else {
        setLocation("Location not found");
      }
    } catch (error) {
      setLocation("Failed to fetch location");
    }
  }
  return (
    <>
      <Container>
        <img className="forest" src={night ? Night : Forest} />
        <Content clicked={clicked}>
          <DivTxt clicked={clicked}>
            <div className="text_change">
              <Txt clicked={clicked}>
                {!quote
                  ? " “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.” "
                  : "“Numbers rule the universe; everything is arranged according to number and mathematical shape.” "}
              </Txt>
              <Rev
                quote={quote}
                src={Reverse}
                onClick={ChangeQuote}
                clicked={clicked}
                alt="Reverse"
              ></Rev>
            </div>
            <Author clicked={clicked}>
              {!quote ? "Ada Lovelace" : "Pythagoras"}
            </Author>
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
                {continent}
              </Continent>
            </Timezone>
            <DayofYear>
              <DayYear clicked={clicked} night={night}>
                Day of the year
              </DayYear>
              <DayNum clicked={clicked} night={night}>
                {dayOfYear}
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
                {wkDay}
              </WeekNum>
            </DayOfWeek>
            <WeekNumber>
              <NumberWeek clicked={clicked} night={night}>
                Week number
              </NumberWeek>
              <NumWeek clicked={clicked} night={night}>
                {weekOfYear}
              </NumWeek>
            </WeekNumber>
          </Weeks>
        </HiddenInfo>
      </Container>
    </>
  );
}
export default MainContainer;
