import React from "react";

const CountDownTimer = () => {
    const startTime = localStorage.getItem('startTime');

    const elapsed = startTime ? Date.now() - new Date(startTime) : 0;

    const initialTimeRemaining = 5 * 24 * 60 * 60 * 1000 - elapsed;

    const [timeRemaining, setTimeRemaining] = React.useState(initialTimeRemaining);

    React.useEffect(() => {
        if (!startTime) {
            localStorage.setItem('startTime', new Date().toISOString());
        }

        const intervalId = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevTime - 1000;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [startTime]);



    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return (
        <div className="discount-timer">
            <div id="timer">
                <span>{String(days).padStart(2, '0')}</span> :
                <span>{String(hours).padStart(2, '0')}</span> :
                <span>{String(minutes).padStart(2, '0')}</span> :
                <span>{String(seconds).padStart(2, '0')}</span>
            </div>
        </div>
    );
};

export default CountDownTimer;
