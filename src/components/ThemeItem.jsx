import { useGlobalContext } from '../context'

function ThemeItem ({ themeName, article }) {
  const { theme } = article
  const { handleChange, makeCapitalizedText } = useGlobalContext()
  const upperCaseName = makeCapitalizedText(themeName)
  return (
    <div>
      <input
        type='radio'
        name='theme'
        id={`${themeName}-theme`}
        value={themeName}
        onChange={e => handleChange(e)}
        checked={theme === themeName}
      />
      <label htmlFor={`${themeName}-theme`}>{upperCaseName}</label>
    </div>
  )
}
export default ThemeItem
