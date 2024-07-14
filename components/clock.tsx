'use client';

import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type TimeRemaining = number;

const Children: React.FC<{ remainingTime: TimeRemaining }> = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return <>{`${minutes}:${seconds}`}</>;
}

interface PomodoroClockProps {  
    duration: number;
    isPlaying?: boolean;
    key: number
     // Optional because default value is provided
}

export const MainClock: React.FC<PomodoroClockProps> = ({ duration, isPlaying = false, key }) => {
    
    if (typeof duration !== 'number') {
        throw new Error('MainClock: duration prop must be a number');
    }

    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={isPlaying}
            duration={duration}
            strokeWidth={25}
            size={320}
            trailColor='#E2E8F0'
            
            
            isSmoothColorTransition={true}
            colors={['#6D7DFE', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[12, 9, 3, 0]}
        >
            {({ remainingTime }) => (
                <div className='text-5xl font-medium'>
                    <span>{Math.floor(remainingTime / 60)}</span>
                    <span>:</span>
                    <span>{(remainingTime % 60).toString().padStart(2, '0')}</span>
                </div>
            )}
        </CountdownCircleTimer>
    );
};
