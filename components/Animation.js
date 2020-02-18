import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

export default FadeInView = (props) => {

  const [XValue] = useState(new Animated.Value(240))
  const [fadeIn] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(XValue, { toValue: 0, duration: 200,}).start();
    Animated.timing(fadeIn, { toValue: 1, duration: 500,}).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        transform: [{translateX: XValue}],
        opacity: fadeIn,
    }}
    >
      {props.children}
    </Animated.View> 
  );
}