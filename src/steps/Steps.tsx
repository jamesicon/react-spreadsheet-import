import { useState } from "react"
import { UploadFlow } from "./UploadFlow"

export const Steps = () => {
  const [, setActiveStep] = useState(0)
  const nextStep = () => setActiveStep((prev) => prev + 1)

  return <UploadFlow nextStep={nextStep} />
}
