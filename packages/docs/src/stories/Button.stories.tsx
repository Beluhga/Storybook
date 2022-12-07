import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    // args = argumento
    children: 'Enviar',
    varianty: 'primary',
    variant: 'md',
    disabled: false,
  },
  argTypes: {
    varianty: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio', // para poder troca ao clicar em algum desses
      },
    },
    variant: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio', // para poder troca ao clicar em algum desses
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    // para ver os eventos não nativos co clicar um botão
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    varianty: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    varianty: 'tertiary',
    children: 'cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    variant: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Proximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
