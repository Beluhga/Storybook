import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    variant: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eum quibusdam iusto eos libero natus eligendi aut aspernatur dolorem deserunt, voluptatem autem voluptatum, placeat quos enim tempore voluptatibus tempora ullam.',
  },
  argTypes: {
    variant: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
