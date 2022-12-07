import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  variant: number
  currentStep?: number
}
export function MultiStep({ variant, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {variant}
      </Label>

      <Steps css={{ '--steps-size': variant }}>
        {
          // div para cada step q tiver...(conteudo do array, indice) => indice + 1
          Array.from({ length: variant }, (_, i) => i + 1).map((step) => {
            return <Step key={step} active={currentStep >= step} />
          })
        }
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
