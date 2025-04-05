import { useEffect } from 'react'
import FormDialog from './components/FormDialog'
import Welcome from './screens/Welcome'
import Form from './screens/Form'
import Cards from './screens/Cards'
import { useGlobalContext } from './context'

function App () {
  const { isModalOpen, handleClickOutside, page, applyTheme, defaultTheme } =
    useGlobalContext()

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isModalOpen])

  useEffect(() => {
    applyTheme()
  }, [defaultTheme])

  return (
    <main>
      {page === 1 && <Welcome></Welcome>}
      {page === 2 && <Form></Form>}
      {page === 3 && <Cards></Cards>}

      <FormDialog></FormDialog>
    </main>
  )
}

export default App
