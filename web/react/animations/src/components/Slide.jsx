import React, {useState, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';

import './slide.css';

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>
    <section className="page">
      <h1>A: 1st page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>
    <section className="page">
      <h1>B: 2nd page</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  </animated.div>
];

export default function Slide() {
  const [index, setIndex] = useState(0);

  const onClick = useCallback(() => setIndex(state => (state + 1) % 2), []);

  const transitions = useTransition(index, p => p, {
    from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}
