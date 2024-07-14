import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface AddTimeProps {
  setDuration: (duration: number) => void;
}

export const AddTime: React.FC<AddTimeProps> = ({ setDuration }) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    // Convert HHMMSS format to total seconds
    const hours = parseInt(otpValues.slice(0, 2).join(''), 10) || 0;
    const minutes = parseInt(otpValues.slice(2, 4).join(''), 10) || 0;
    const seconds = parseInt(otpValues.slice(4, 6).join(''), 10) || 0;

    const durationInSeconds = hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(durationInSeconds);

    // Update the duration in parent component
    setDuration(durationInSeconds);
  }, [otpValues, setDuration]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    handleOtpChange(index, e.target.value);
  };

  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot
          index={0}
          onChange={(e) => handleOtpChange(0,e.target.value)}
        />
        <InputOTPSlot
          index={1}
          onChange={(e) => handleChange(e, 1)}
        />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot
          index={2}
          onChange={(e) => handleChange(e, 2)}
        />
        <InputOTPSlot
          index={3}
          onChange={(e) => handleChange(e, 3)}
        />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot
          index={4}
          onChange={(e) => handleChange(e, 4)}
        />
        <InputOTPSlot
          index={5}
          onChange={(e) => handleChange(e, 5)}
        />
      </InputOTPGroup>
    </InputOTP>
  );
};
