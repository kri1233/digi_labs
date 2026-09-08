import { trackEvent } from '../utils/analytics'

const TrackedLink = ({
  href,
  children,
  className = '',
}) => {
  const handleClick = () => {
    trackEvent('cta_click', {
      cta_name: 'book_a_call',
    })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}

export default TrackedLink