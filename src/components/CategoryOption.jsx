import { useGlobalContext } from '../context'

function CategoryOption ({ optionName }) {
  const { makeCapitalizedText } = useGlobalContext()
  return (
    <option value={optionName === 'pick one option' ? '' : optionName}>
      {optionName === 'pick one option'
        ? `--${
            optionName.substring(0, 1).toUpperCase() + optionName.substring(1)
          }--`
        : makeCapitalizedText(optionName)}
    </option>
  )
}
export default CategoryOption
