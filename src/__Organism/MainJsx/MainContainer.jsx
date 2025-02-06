import React, { useEffect, useState } from "react";
import "../../App.css";
import Forest from "../../assets/Images/Forest.png";
import {
  BackgroundImage,
  Container,
  Content,
} from "../../__Organism/Container/Container";
import { Author, DivTxt, Rev, Txt } from "../../__Atom/Text/Text";
import {
  BelowDiv,
  BST,
  Clock,
  ClockBST,
  DayTime,
  InfoDiv,
  InformationalDiv,
  Locat,
  SunMoon,
  SunMorning,
} from "../../__Molecule/Information/Information";
import Sun from "../../assets/Images/Sun.png";
import Reverse from "../../assets/Images/reverse.png";
import {
  ArrowMore,
  ArrowRotate,
  Button,
  MoreLess,
} from "../../__Atom/Button/Button";
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
import { success } from "../../Services/Api";

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

  function GetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => success(position, setLocation, setContinent),
        () => setLocation("Location permission denied")
      );
    } else {
      alert("Geolocation not found");
    }
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
    navigator.geolocation.getCurrentPosition(
      (position) => success(position, setLocation, setContinent),
      (error) => {
        setLocation("Location not found");
      }
    );
  }, []);

  useEffect(() => {
    GetLocation();
  }, []);

  return (
    <>
      <Container>
        <BackgroundImage src={night ? Night : Forest}></BackgroundImage>
        <Content clicked={clicked}>
          <DivTxt clicked={clicked}>
            <InformationalDiv>
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
            </InformationalDiv>
            <Author clicked={clicked}>
              {!quote ? "Ada Lovelace" : "Pythagoras"}
            </Author>
          </DivTxt>
          <BelowDiv>
            <InfoDiv>
              <SunMorning>
                <SunMoon
                  src={night ? Moon : Sun}
                  alt={night ? "Moon" : "Sun"}
                ></SunMoon>

                <DayTime>
                  {night
                    ? "GOOD EVENING, IT’S CURRENTLY"
                    : "GOOD MORNING, IT’S CURRENTLY"}
                </DayTime>
              </SunMorning>
              <ClockBST>
                <Clock>{time}</Clock>
                <BST>BST</BST>
              </ClockBST>
              <Locat>IN {location}</Locat>
            </InfoDiv>
            <Button onClick={Click}>
              <MoreLess>{clicked ? "Less" : "More"}</MoreLess>
              <ArrowMore>
                <ArrowRotate
                  src={Arrow}
                  alt="Arrow"
                  clicked={clicked}
                ></ArrowRotate>
              </ArrowMore>
            </Button>
          </BelowDiv>
        </Content>
        <HiddenInfo clicked={clicked} night={night}>
          <ZoneYear clicked={clicked}>
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
          <Weeks clicked={clicked}>
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
