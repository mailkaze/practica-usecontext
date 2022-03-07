import { useContext } from 'react'
import { AppContext } from './Provider'

export default function Paragraph() {
  const [state, setState] = useContext(AppContext)

  return (
    <div>
      <p>nombre: {state?.name}</p>
      <p>edad: {state?.age}</p>
    </div>
  )
}
