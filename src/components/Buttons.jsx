import { memo } from 'react'
import Button from './Button'

function Buttons ({ buttons }) {
  return (
    <div className='button-wrapper'>
      <div className='buttons'>
        {buttons.map(button => {
          return <Button key={button.id} {...button}></Button>
        })}
      </div>
    </div>
  )
}
export default memo(Buttons)
