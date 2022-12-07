import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    varient: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum quibusdam iusto eos libero natus eligendi aut aspernatur dolorem deserunt, voluptatem autem voluptatum, placeat quos enim tempore voluptatibus tempora ullam.',
  },
  argTypes: {
    variant: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio', // para poder troca ao clicar em algum desses
      },
    },
  },
} as Meta<TextProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
