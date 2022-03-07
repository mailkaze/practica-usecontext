import { useContext } from 'react'
import { AppContext } from './Provider'

export default function Input() {
  const [state, setState] = useContext(AppContext)

  return (
    <div>
      <input type="text"
        value={state?.name}
        onChange={ e => setState({ ...state, name: e.target.value}) }
      />
    </div>
  )
}
