import React, { useEffect, useState } from 'react';
import './Header.css';
import { BellRing, ChevronDown } from 'lucide-react';
import Logo from '/logo.png';

const Header = () => {
    const [timer, setTimer] = useState({
      months: 2,
      days: 15,
      hours: 10,
      minutes: 45,
      seconds: 30
    });

    // Timer countdown effect
    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                let { months, days, hours, minutes, seconds } = prevTimer;

                seconds--;

                if (seconds < 0) {
                    seconds = 59;
                    minutes--;

                    if (minutes < 0) {
                        minutes = 59;
                        hours--;

                        if (hours < 0) {
                            hours = 23;
                            days--;

                            if (days < 0) {
                                days = 30;
                                months--;

                                if (months < 0) {
                                    clearInterval(countdown);
                                    return prevTimer;
                                }
                            }
                        }
                    }
                }

                return { months, days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    // Formatting time to add 0 in 1 digit number
    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <>
        
            <nav>
                <div className="nav-container">

                <div className="logo">
                  <img src={Logo} alt="" />
                </div>

                <div className="nav-middle">

                  <div className="timer-box">
                      <div className="timer-span">
                          <span>{formatTime(timer.months)}</span>
                          <span>Month</span>
                      </div>

                      <div className="timer-span">
                          <span>{formatTime(timer.days)}</span>
                          <span>Days</span>
                      </div>

                      <div className="timer-span">
                          <span>{formatTime(timer.hours)}</span>
                          <span>Hours</span>
                      </div>

                      <div className="timer-span">
                        <span>{formatTime(timer.minutes)}</span>
                        <span>Min</span>
                      </div>

                    </div>
                    <div className="time-left-text">Time Limit</div>
                    <span className="time-left-subtext">Terms and Condition</span>

                </div>

                <div className="nav-right">
                <BellRing className="bell" size={24} />
                <div className="user">
                <span className="username">DISHANT MEWARA</span>
                <ChevronDown className="down-arrow" size={24} />
                </div>
                </div>


                </div>
            </nav>
        </>
    );
};

export default Header;
