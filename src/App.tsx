import MojoSelector from '@/components/MojoSelector'
import {
  Buttons,
  Check,
  Container,
  Header,
  Return,
  Text,
} from '@/components/styled'
import { MojoType } from '@/utils/types'

const items: MojoType[] = [
  { name: 'Bored', image: 'bored.svg' },
  { name: 'Chill', image: 'chill.svg' },
  { name: 'Anxious', image: 'anxious.svg' },
  { name: 'Overworked', image: 'overworked.svg' },
  { name: 'Tired', image: 'tired.svg' },
  { name: 'Blessed', image: 'blessed.svg' },
  { name: 'Excited', image: 'excited.svg' },
  { name: 'Angry', image: 'angry.svg' },
  { name: 'Productive', image: 'productive.svg' },
]

const App = () => {
  return (
    <Container>
      <Header>
        <img src='logo.svg' />
        <img src='info.svg' />
      </Header>
      <Text>Choose your mojo</Text>
      <MojoSelector items={items} />

      <Buttons>
        <Return>
          <img src='return.svg' />
        </Return>
        <Check>
          <img src='check.svg' />
        </Check>
      </Buttons>
    </Container>
  )
}

export default App
