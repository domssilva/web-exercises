import React from 'react'

export default function Hero({children, heroClassName}) {
  return (
    <header className={heroClassName}>
      {children}
    </header>
  )
}

Hero.defaultProps = {
  heroClassName: 'defaultHero'
}