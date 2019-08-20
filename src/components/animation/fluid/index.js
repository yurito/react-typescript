import React, { useRef } from 'react'
import { Canvas } from '@react-vertex/core'
import { useMeasure } from '@react-vertex/dom-hooks'
import Simulation from './Simulation'

const attrs = {
  alpha: true,
  depth: false,
  stencil: false,
  antialias: false,
  preserveDrawingBuffer: false,
}

const style = {
  borderRadius: 4,
  cursor: 'pointer',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
}

// ORIGINAL https://github.com/PavelDoGreat/WebGL-Fluid-Simulation

const FluidSimulation = ( props) =>{
  console.log(props.children)
  const container = useRef()
  const { width } = useMeasure(container)

  return (

      <div ref={container}>
        {width ? (
          <Canvas
            webgl2
            width={width}
            height={width}
            canvasStyle={style}
            contextAttrs={attrs}
          >
            <Simulation />

          </Canvas>
        ) : null}
        {props.children}

      </div>
  )
}

export default FluidSimulation
