import { nanoid } from 'nanoid'

export const navigationButtons = [
  {
    id: nanoid(),
    type: 'button',
    navigation: 'form',
    className: 'back-button',
    buttonStyle: 'outline',
    action: 'prev',
    label: 'Go to previous step',
    content: 'Back'
  },
  {
    id: nanoid(),
    type: 'button',
    navigation: 'form',
    className: 'next-button',
    buttonStyle: 'primary',
    action: 'next',
    label: 'Go to next step',
    content: 'Next'
  },
  {
    id: nanoid(),
    type: 'submit',
    navigation: 'form',
    className: '',
    buttonStyle: 'primary',
    action: '',
    label: 'Generate article preview card',
    content: 'Generate'
  },
  {
    id: nanoid(),
    type: 'button',
    navigation: 'screen',
    className: '',
    buttonStyle: 'outline',
    action: 'next',
    label: 'Go to form to get started',
    content: 'Get Started'
  },
  {
    id: nanoid(),
    type: 'button',
    navigation: 'screen',
    className: '',
    buttonStyle: 'outline',
    action: 'prev',
    label: 'Go to previous page',
    content: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m9.402 12.5l1.636 2.942q.143.293-.075.497t-.49.044l-5.187-3.306q-.378-.242-.378-.677t.378-.677l5.187-3.306q.273-.161.49.044t.076.497L9.402 11.5H21q.214 0 .357.143T21.5 12t-.143.357T21 12.5z'
        />
      </svg>
    )
  },
  {
    id: nanoid(),
    type: 'button',
    navigation: 'screen',
    className: '',
    buttonStyle: 'outline',
    action: 'next',
    label: 'Go to next page',
    content: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M13.527 15.983q-.273.161-.49-.044t-.076-.497l1.637-2.942H3q-.213 0-.357-.143T2.5 12t.143-.357T3 11.5h11.598l-1.636-2.942q-.143-.293.075-.497t.49-.044l5.187 3.306q.378.243.378.677t-.378.677z'
        />
      </svg>
    )
  }
]

export const categoryList = [
  'pick one option',
  'business',
  'education',
  'entertainment',
  'environment',
  'fashion',
  'food-&-drink',
  'health',
  'lifestyle',
  'personal-growth',
  'productivity',
  'sports',
  'technology',
  'travel'
]

export const themeList = [
  'soft-purple',
  'soft-blue',
  'stormy-pink',
  'vintage-pink',
  'coffee-time',
  'summer',
  'nature'
]

export const avatarList = [
  'chequered',
  'polka-dot',
  'carpet',
  'diagonal-stripes'
]
export const imageList = [
  'diamonds',
  'long-bars',
  'wind-rose',
  'peppers',
  'hypnotic',
  'broken-dots',
  'spaghetti'
]
