import { useGlobalContext } from '../context'

function CategoryOption ({ optionName }) {
  const { makeCapitalizedText } = useGlobalContext()
  return <option value={optionName}>{makeCapitalizedText(optionName)}</option>
}
export default CategoryOption
