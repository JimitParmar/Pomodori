'use client'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'


type TimeRemaining = number;

const children : React.FC<{ remainingTime: TimeRemaining }> = ({remainingTime}) => {
    const minutes = Math.floor(remainingTime/60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
}


export const MainClock :React.FC<{duration : number}> = ({ duration }) => (
    <CountdownCircleTimer
        isPlaying
        duration={duration}
        strokeWidth={25}
        size={320}
        trailColor='#E2E8F0'
        onComplete={() => {
            return { shouldRepeat: true, delay: 1.5 }
        } }
        isSmoothColorTransition={true}
        colors={['#6D7DFE', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[12, 9, 3, 0]}
    >
            {({ remainingTime }) => (
                <div className='text-5xl font-medium'>
                    <span>{Math.floor(remainingTime/60)}</span>
                    <span>:</span>
                    <span>{(remainingTime % 60).toString().padStart(2,'0')}</span>
                </div>
            )}
        </CountdownCircleTimer>
    
  )
  