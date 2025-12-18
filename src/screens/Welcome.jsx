import { useLayoutEffect, useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'

function Welcome () {
  const { defaultArticle, getButtonOnClick } = useGlobalContext()
  const [showAnimation, setShowAnimation] = useState(false)

  useLayoutEffect(() => {
    setShowAnimation(true)
  }, [])
  return (
    <section
      className={`section section--full-screen ${
        showAnimation ? 'fade-in' : ''
      }`}
    >
      <div
        className={`container columns
          ${showAnimation ? 'fade-in' : ''}`}
      >
        <header className='grid-row'>
          <h1 className='main-title'>Cardify</h1>
          <p className='text-center'>
            Go from article to a preview card like the one here. All it takes is
            filling a short form.
          </p>
          {navigationButtons
            .filter(button => button.content === 'Get Started')
            .map(button => ({
              ...button,
              onClick: getButtonOnClick(button.action, button.navigation)
            }))
            .map(button => {
              return <Button key={button.id} {...button}></Button>
            })}
        </header>

        <Card article={defaultArticle}></Card>
      </div>
    </section>
  )
}
export default Welcome
