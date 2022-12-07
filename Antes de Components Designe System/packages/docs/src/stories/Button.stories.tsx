import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    // args = argumento
    children: 'Enviar',
  },
} as Meta<ButtonProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    variant: 'big',
  },
}
