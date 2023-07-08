import React, { useState, useEffect } from "react";
import './index.scss';
import {CountdownProps} from "./props";

const twoDotSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="12" fill="none">
        <circle cx="2" cy="2" r="2" fill="#FF6000"/><circle cx="2" cy="10" r="2" fill="#FF6000"/>
    </svg>
);

const Countdown: React.FC<CountdownProps> = ({ expireDate, title, style, boxColor, textColor, ...rest }) => {
    const calculateTimeLeft = () => {
        const difference = expireDate - new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const customStyles: React.CSSProperties = {
        backgroundColor: boxColor ? boxColor : undefined,
        color: textColor ? textColor : undefined,
    };

    return (
        <div className="countdown" style={{ ...style, ...customStyles }} {...rest}>
            <h3 className="title">{title}</h3>
            <div className="countdownWrapper">
                <div className="countdownCard">
                    <div className="countdownCardTime">
                        {timeLeft.hours}
                    </div>
                    <div className="countdownCardUnit">Saat</div>
                </div>
                {twoDotSvg}
                <div className="countdownCard">
                    <div className="countdownCardTime">
                        {timeLeft.minutes}
                    </div>
                    <div className="countdownCardUnit">Dakika</div>
                </div>
                {twoDotSvg}
                <div className="countdownCard">
                    <div className="countdownCardTime">
                        {timeLeft.seconds}
                    </div>
                    <div className="countdownCardUnit">Saniye</div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
