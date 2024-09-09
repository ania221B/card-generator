import { useGlobalContext } from '../context'

function RadioItem ({ item, itemName, itemType }) {
  const { handleChange, makeCapitalizedText, defaultTheme } = useGlobalContext()
  const upperCaseName = makeCapitalizedText(itemName)
  return (
    <div className={`article-form__radio-wrapper ${defaultTheme}`}>
      <input
        type='radio'
        name={itemType}
        id={`${itemName}-avatar`}
        value={itemName}
        onChange={e => handleChange(e)}
        checked={item === itemName}
      />
      <label htmlFor={`${itemName}-avatar`}>{upperCaseName}</label>
    </div>
  )
}
export default RadioItem
