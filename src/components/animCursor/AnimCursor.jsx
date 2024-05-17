import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const AnimCursor = () => {
  return (
    <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color='12, 44, 174'
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
            display: "none"
        }}
        clickables={[
            'li',
            'a',
            'input[type="search"]',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
        ]}
    />
  )
}

export default AnimCursor