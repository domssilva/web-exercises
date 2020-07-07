import React from 'react'
import {useSpring, animated} from 'react-spring'

function Post(props) {

  // A spring simply animates values from one state to another.
  const spring1 = useSpring({
    from: { color: 'red' },
    to: { color: 'blue' },
    delay: 1000,
    config: { duration: 500 },
  });

  const spring2 = useSpring({
    from: { color: 'orange' },
    to: { color: 'pink' },
    delay: 2000,
  });

  const postCss = {
    border: '1px solid black',
    padding: '0.5em',
  };

  return (
    <animated.div style={props.id === 1 ? spring1 : spring2}>
      <div style={postCss}>
        {props.title}
      </div>
    </animated.div>
  );
}

export default Post;