import { memo } from 'react'

function Button ({
  type,
  className,
  buttonStyle,
  label,
  content,
  onClick = ''
}) {
  if (type === 'submit' || !onClick) {
    return (
      <button
        type={type}
        className={className ? `button ${className}` : `button`}
        button-type={buttonStyle}
        aria-label={label}
      >
        {content}
      </button>
    )
  }
  return (
    <button
      type={type}
      className={className ? `button ${className}` : `button`}
      button-type={buttonStyle}
      onClick={onClick}
      aria-label={label}
    >
      {content}
    </button>
  )
}

export default memo(Button)
