import React from 'react'
import {useSpring, animated} from 'react-spring'

function Post(props) {

  // A spring simply animates values from one state to another.
  const spring = useSpring({
    from: { color: 'red' },
    to: { color: 'blue' },
    delay: 1000,
    config: { duration: 500 },
  });

  const postCss = {
    border: '1px solid black',
    padding: '0.5em',
  };

  return (
    <animated.div style={spring}>
      <div style={postCss}>
        {props.title}
      </div>
    </animated.div>
  );
}

export default Post;