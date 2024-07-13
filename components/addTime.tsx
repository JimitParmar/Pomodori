import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  
  export function AddTime() {
    return (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot placeholder = 'h' index={0} />
          <InputOTPSlot placeholder = 'h' index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
        <InputOTPSlot placeholder = 'm' index={2} />
        <InputOTPSlot placeholder = 'm' index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot placeholder = 's' index={4} />
          <InputOTPSlot placeholder = 's' index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  }
  