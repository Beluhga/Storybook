import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}

          <Text size="sm">Aceita os termos</Text>
        </Box>
      )
    },
  ], // para colocar outros elementops da viw sem ser filho do component
} as Meta<CheckboxProps> // tipa para Meta para mostra os parametros que pode passar para configuração

export const Primary: StoryObj<CheckboxProps> = {}
