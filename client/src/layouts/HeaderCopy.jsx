import React, { useEffect, useState } from 'react';
import { BellRing, ChevronDown } from 'lucide-react';
import Logo from '/logo.png';

const HeaderCopy = () => {
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
            <nav className="sticky top-0 z-50 bg-white shadow-md px-[1vw]">
                <div className="mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <img src={Logo} alt="" className="w-[220px] h-[50px] md:w-[220px] md:h-[50px] sm:w-[130px] sm:h-[40px] xs:w-[115px] xs:h-[40px]" />
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="text-lg font-bold">Time Left</div>

                        <div className="flex items-center gap-1 bg-gray-200 text-white p-[0.3rem] rounded">
                            <div className="flex flex-col items-center justify-center bg-[#1c0274] text-white p-[0.3rem] rounded text-xs">
                                <span>{formatTime(timer.months)}</span>
                                <span>Month</span>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-[#1c0274] text-white p-[0.3rem] rounded text-xs">
                                <span>{formatTime(timer.days)}</span>
                                <span>Days</span>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-[#1c0274] text-white p-[0.3rem] rounded text-xs">
                                <span>{formatTime(timer.hours)}</span>
                                <span>Hours</span>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-[#1c0274] text-white p-[0.3rem] rounded text-xs">
                                <span>{formatTime(timer.minutes)}</span>
                                <span>Min</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <BellRing className="w-6 h-6 md:w-6 md:h-6 sm:w-[19px] xs:hidden" />
                        <div className="flex items-center gap-1">
                            <span className="text-sm md:text-base sm:text-[13px] xs:text-[15px]">DISHANT MEWARA</span>
                            <ChevronDown className="w-6 h-6 md:w-6 md:h-6 sm:w-[15px] xs:w-[15px]" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderCopy;