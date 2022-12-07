import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observação</Text>
          {Story()}
        </Box>
      )
    },
  ], // para colocar outros elementops da viw sem ser filho do component
} as Meta<TextAreaProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Coloque uma observação...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
