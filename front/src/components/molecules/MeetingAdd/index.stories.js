import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MeetingAdd } from 'components'

storiesOf('MeetingAdd', module)
  .add('default', () => (
    <MeetingAdd>Hello</MeetingAdd>
  ))
  .add('reverse', () => (
    <MeetingAdd reverse>Hello</MeetingAdd>
  ))
