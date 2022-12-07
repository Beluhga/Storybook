import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Beluhga.png',
    alt: 'Michael Albuquerque',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<AvatarProps> = {}

export const WidthFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
