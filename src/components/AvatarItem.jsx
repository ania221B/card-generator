import { useGlobalContext } from '../context'

function AvatarItem ({ avatarName, article }) {
  const { avatar } = article
  const { handleChange, makeCapitalizedText } = useGlobalContext()
  const upperCaseName = makeCapitalizedText(avatarName)
  return (
    <div>
      <input
        type='radio'
        name='avatar'
        id={`${avatarName}-avatar`}
        value={avatarName}
        onChange={e => handleChange(e)}
        checked={avatar === avatarName}
      />
      <label htmlFor={`${avatarName}-avatar`}>{upperCaseName}</label>
    </div>
  )
}
export default AvatarItem
