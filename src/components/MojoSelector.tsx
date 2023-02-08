import { useState } from 'react'

import { getCoordinatesByAngle } from '@/utils'
import { Mojo, Name, Ring } from '@/components/styled'
import { type MojoType } from '@/utils/types'

type Props = {
  items: MojoType[]
}

const MojoSelector = ({ items }: Props) => {
  const [rotation, setRotation] = useState(0)
  const [selected, setSelected] = useState(0)

  const rotationUnit = (2 * Math.PI) / items.length
  const mojos = items.map((item, index) => {
    const angle = index * rotationUnit + Math.PI
    const coord = getCoordinatesByAngle(angle)
    return { ...item, ...coord }
  })

  const handleClick = (index: number) => {
    setSelected(index)

    const angleInDegrees = (rotationUnit * 180) / Math.PI
    const direction = selected - index > 0 ? -1 : 1

    const findNextRotation = () => {
      let nextRotation = selected - index
      if (Math.abs(selected - index) > items.length / 2) {
        nextRotation = (items.length - Math.abs(selected - index)) * direction
      }
      return rotation + nextRotation * angleInDegrees
    }

    setRotation(findNextRotation())
  }

  return (
    <Ring animate={{ rotate: rotation }}>
      <Name animate={{ rotate: -rotation }}>{mojos[selected].name}</Name>

      {mojos.map((mojo, index) => (
        <Mojo
          key={index}
          animate={{
            x: mojo.x,
            y: mojo.y,
            scale: index === selected ? 1 : 0.5,
            rotate: -rotation,
          }}
          onClick={() => handleClick(index)}
          src={mojo.image}
        />
      ))}
    </Ring>
  )
}

export default MojoSelector
