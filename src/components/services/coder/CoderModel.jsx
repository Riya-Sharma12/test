import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CoderModel(props) {
  const { nodes, materials } = useGLTF('/coderModel.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Python_Python_0.geometry} material={materials.Python} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/coderModel.glb')
