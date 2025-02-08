import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ConstructsModel(props) {
  const { nodes, materials } = useGLTF('/constructsModel.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0.001, 189.866, 22.496]} rotation={[-0.009, 0, 0]} scale={100}>
          <group rotation={[0, 0, -2.094]}>
            <mesh geometry={nodes.body_center_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes['body_center_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.body_center_light_1_0.geometry} material={materials.light_1} />
            <mesh geometry={nodes.body_center_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_center_bronze_HL_0.geometry} material={materials.bronze_HL} />
            <mesh geometry={nodes.body_center_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes['body_center_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes.body_center_gray_0_0.geometry} material={materials.gray_0} />
          </group>
          <group position={[0, -0.19, 0]}>
            <mesh geometry={nodes.body_blade_1_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_1_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_1_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_1_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_1_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_1_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_1_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[-0.165, 0.095, 0]} rotation={[0, 0, -2.094]}>
            <mesh geometry={nodes.body_blade_3_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_3_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_3_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_3_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_3_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_3_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_3_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[0.165, 0.095, 0]} rotation={[0, 0, 2.094]}>
            <mesh geometry={nodes.body_blade_2_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_2_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_2_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_2_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_2_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_2_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_2_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
        </group>
        <group position={[21.807, 176.947, -12.998]} rotation={[2.177, 0.955, 1.571]} scale={100}>
          <group position={[0, -0.19, 0]}>
            <mesh geometry={nodes.body_blade_1001_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_1001_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_1001_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_1001_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_1001_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_1001_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_1001_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[-0.165, 0.095, 0]} rotation={[0, 0, -2.094]}>
            <mesh geometry={nodes.body_blade_3001_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_3001_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_3001_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_3001_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_3001_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_3001_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_3001_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[0.165, 0.095, 0]} rotation={[0, 0, 2.094]}>
            <mesh geometry={nodes.body_blade_2001_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_2001_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_2001_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_2001_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_2001_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_2001_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_2001_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <mesh geometry={nodes.body_center001_bronze_light_0.geometry} material={materials.bronze_light} />
          <mesh geometry={nodes['body_center001_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes.body_center001_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes.body_center001_bronze_dark_0.geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes.body_center001_bronze_HL_0.geometry} material={materials.bronze_HL} />
          <mesh geometry={nodes.body_center001_bronze_mid_0.geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes['body_center001_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
          <mesh geometry={nodes.body_center001_gray_0_0.geometry} material={materials.gray_0} />
        </group>
        <group position={[-21.808, 176.948, -12.999]} rotation={[2.177, -0.955, -1.571]} scale={100}>
          <group rotation={[0, 0, 2.094]}>
            <mesh geometry={nodes.body_center002_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes['body_center002_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.body_center002_light_1_0.geometry} material={materials.light_1} />
            <mesh geometry={nodes.body_center002_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_center002_bronze_HL_0.geometry} material={materials.bronze_HL} />
            <mesh geometry={nodes.body_center002_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes['body_center002_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes.body_center002_gray_0_0.geometry} material={materials.gray_0} />
          </group>
          <group position={[0, -0.19, 0]}>
            <mesh geometry={nodes.body_blade_1002_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_1002_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_1002_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_1002_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_1002_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_1002_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_1002_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[-0.165, 0.095, 0]} rotation={[0, 0, -2.094]}>
            <mesh geometry={nodes.body_blade_3002_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_3002_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_3002_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_3002_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_3002_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_3002_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_3002_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[0.165, 0.095, 0]} rotation={[0, 0, 2.094]}>
            <mesh geometry={nodes.body_blade_2002_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_2002_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_2002_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_2002_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_2002_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_2002_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_2002_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
        </group>
        <group position={[0, 214.718, -13.347]} rotation={[-1.92, 0, -Math.PI]} scale={100}>
          <group rotation={[0, 0, 2.094]}>
            <mesh geometry={nodes.body_center003_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes['body_center003_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.body_center003_light_1_0.geometry} material={materials.light_1} />
            <mesh geometry={nodes.body_center003_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_center003_bronze_HL_0.geometry} material={materials.bronze_HL} />
            <mesh geometry={nodes.body_center003_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes['body_center003_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes.body_center003_gray_0_0.geometry} material={materials.gray_0} />
          </group>
          <group position={[0, -0.19, 0]}>
            <mesh geometry={nodes.body_blade_1003_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_1003_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_1003_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_1003_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_1003_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_1003_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_1003_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[-0.165, 0.095, 0]} rotation={[0, 0, -2.094]}>
            <mesh geometry={nodes.body_blade_3003_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_3003_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_3003_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_3003_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_3003_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_3003_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_3003_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
          <group position={[0.165, 0.095, 0]} rotation={[0, 0, 2.094]}>
            <mesh geometry={nodes.body_blade_2003_gray_0_0.geometry} material={materials.gray_0} />
            <mesh geometry={nodes.body_blade_2003_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.body_blade_2003_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes.body_blade_2003_copper_0.geometry} material={materials.copper} />
            <mesh geometry={nodes.body_blade_2003_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes.body_blade_2003_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes['body_blade_2003_gray_-1_0'].geometry} material={materials['gray_-1']} />
          </group>
        </group>
        <group position={[0, 203.49, 26.21]} scale={24.904}>
          <mesh geometry={nodes.frame_bronze_dark_0.geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes.frame_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes['frame_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes.frame_bronze_light_0.geometry} material={materials.bronze_light} />
          <mesh geometry={nodes.frame_bronze_mid_0.geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes.frame_bronze_HL_0.geometry} material={materials.bronze_HL} />
        </group>
        <group position={[67.361, 162.082, -22.585]} rotation={[0.098, 0, 0.587]} scale={100}>
          <mesh geometry={nodes['<o_gray_0_0'].geometry} material={materials.gray_0} />
          <mesh geometry={nodes['<o_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes['<o_bronze_light_0'].geometry} material={materials.bronze_light} />
          <mesh geometry={nodes['<o_bronze_mid_0'].geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes['<o_bronze_dark_0'].geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes['<o_bronze_HL_0'].geometry} material={materials.bronze_HL} />
          <mesh geometry={nodes['<o_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes['<o_light_1_0'].geometry} material={materials.light_1} />
          <mesh geometry={nodes['<o_gray_+1_0'].geometry} material={materials.gray_1} />
        </group>
        <group position={[0, 258.052, 9.603]} rotation={[-1.733, 0, 0]} scale={100}>
          <mesh geometry={nodes.pendant_top_bronze_mid_0.geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes.pendant_top_bronze_dark_0.geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes.pendant_top_bronze_light_0.geometry} material={materials.bronze_light} />
          <mesh geometry={nodes.pendant_top_bronze_HL_0.geometry} material={materials.bronze_HL} />
          <mesh geometry={nodes['pendant_top_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes.pendant_top_light_3_0.geometry} material={materials.light_3} />
          <mesh geometry={nodes.pendant_top_light_4_0.geometry} material={materials.light_4} />
          <mesh geometry={nodes.pendant_top_light_2_0.geometry} material={materials.light_2} />
          <mesh geometry={nodes.pendant_top_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes['pendant_top_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
        </group>
        <group position={[-67.361, 162.082, -22.585]} rotation={[-3.042, 0.13, -2.567]} scale={100}>
          <mesh geometry={nodes['<o001_gray_0_0'].geometry} material={materials.gray_0} />
          <mesh geometry={nodes['<o001_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes['<o001_bronze_light_0'].geometry} material={materials.bronze_light} />
          <mesh geometry={nodes['<o001_bronze_mid_0'].geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes['<o001_bronze_dark_0'].geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes['<o001_bronze_HL_0'].geometry} material={materials.bronze_HL} />
          <mesh geometry={nodes['<o001_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes['<o001_light_1_0'].geometry} material={materials.light_1} />
          <mesh geometry={nodes['<o001_gray_+1_0'].geometry} material={materials.gray_1} />
        </group>
        <group position={[0, 105.527, -61.974]} rotation={[0.466, 0, 0]} scale={100}>
          <mesh geometry={nodes.pendant_bottom_light_3_0.geometry} material={materials.light_3} />
          <mesh geometry={nodes.pendant_bottom_light_4_0.geometry} material={materials.light_4} />
          <mesh geometry={nodes['pendant_bottom_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes.pendant_bottom_light_2_0.geometry} material={materials.light_2} />
          <mesh geometry={nodes.pendant_bottom_bronze_dark_0.geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes.pendant_bottom_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes.pendant_bottom_bronze_mid_0.geometry} material={materials.bronze_mid} />
        </group>
        <group position={[0, 105.527, -61.974]} rotation={[0.466, 0, 0]} scale={100}>
          <mesh geometry={nodes.pendant_bottom001_bronze_dark_0.geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes.pendant_bottom001_bronze_mid_0.geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes.pendant_bottom001_bronze_light_0.geometry} material={materials.bronze_light} />
          <mesh geometry={nodes.pendant_bottom001_gray_0_0.geometry} material={materials.gray_0} />
          <mesh geometry={nodes['pendant_bottom001_gray_-3_0'].geometry} material={materials['gray_-3']} />
          <mesh geometry={nodes['pendant_bottom001_gray_-2_0'].geometry} material={materials['gray_-2']} />
          <mesh geometry={nodes.pendant_bottom001_bronze_HL_0.geometry} material={materials.bronze_HL} />
        </group>
        <group position={[0, 105.527, -61.974]} rotation={[0.466, 0, 0]} scale={100}>
          <mesh geometry={nodes.pendant_bottom002_gray_0_0.geometry} material={materials.gray_0} />
          <mesh geometry={nodes.pendant_bottom002_light_2_0.geometry} material={materials.light_2} />
        </group>
        <group position={[0, 105.527, -61.974]} rotation={[0.466, 0, 0]} scale={100}>
          <mesh geometry={nodes['pendant_bottom003_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes['pendant_bottom003_gray_+1_0'].geometry} material={materials.gray_1} />
          <mesh geometry={nodes['pendant_bottom003_gray_-2_0'].geometry} material={materials['gray_-2']} />
          <mesh geometry={nodes['pendant_bottom003_gray_-3_0'].geometry} material={materials['gray_-3']} />
        </group>
        <group position={[47.933, 243.134, -34.648]} rotation={[0.538, -0.331, 0.526]} scale={100}>
          <mesh geometry={nodes['thorn_top_gray_-3_0'].geometry} material={materials['gray_-3']} />
          <mesh geometry={nodes.thorn_top_light_3_0.geometry} material={materials.light_3} />
          <mesh geometry={nodes.thorn_top_light_4_0.geometry} material={materials.light_4} />
          <mesh geometry={nodes.thorn_top_bronze_light_0.geometry} material={materials.bronze_light} />
          <mesh geometry={nodes.thorn_top_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes.thorn_top_light_2_0.geometry} material={materials.light_2} />
          <mesh geometry={nodes['thorn_top_gray_-2_0'].geometry} material={materials['gray_-2']} />
          <mesh geometry={nodes['thorn_top_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes['thorn_top_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes['thorn_top_gray_+1_0'].geometry} material={materials.gray_1} />
          <mesh geometry={nodes.thorn_top_bronze_mid_0.geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes.thorn_top_bronze_dark_0.geometry} material={materials.bronze_dark} />
        </group>
        <group position={[38.018, 232.12, -19.098]} scale={99.165}>
          <mesh geometry={nodes.frame001_bronze_dark_0.geometry} material={materials.bronze_dark} />
          <mesh geometry={nodes.frame001_bronze_light_0.geometry} material={materials.bronze_light} />
          <mesh geometry={nodes.frame001_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes.frame001_bronze_mid_0.geometry} material={materials.bronze_mid} />
          <mesh geometry={nodes['frame001_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
          <mesh geometry={nodes['frame001_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
        </group>
        <group position={[136.554, 256.469, -111.144]} rotation={[0.16, 0, Math.PI]} scale={13.761}>
          <group position={[0, -0.973, -0.432]} rotation={[-0.651, 0, -Math.PI]} scale={[1, 1.187, 1]}>
            <mesh geometry={nodes.tr_center001_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes.tr_center001_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.tr_center001_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes['tr_center001_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes['tr_center001_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
            <mesh geometry={nodes.tr_center001_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes['tr_center001_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.tr_center001_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes.Plane_light_1_0.geometry} material={materials.light_1} scale={7.42} />
          </group>
          <group position={[0.843, 0.487, -0.432]} rotation={[0.364, -0.552, -0.943]} scale={[1, 1.187, 1]}>
            <mesh geometry={nodes.tr_center006_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes.tr_center006_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.tr_center006_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes['tr_center006_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes['tr_center006_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
            <mesh geometry={nodes.tr_center006_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes['tr_center006_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.tr_center006_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes.Plane002_light_1_0.geometry} material={materials.light_1} scale={7.42} />
          </group>
          <group position={[-0.843, 0.487, -0.432]} rotation={[0.364, 0.552, 0.943]} scale={[-1, 1.187, 1]}>
            <mesh geometry={nodes.tr_center005_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes.tr_center005_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.tr_center005_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes['tr_center005_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes['tr_center005_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
            <mesh geometry={nodes.tr_center005_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes['tr_center005_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.tr_center005_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes.Plane003_light_1_0.geometry} material={materials.light_1} scale={7.42} />
          </group>
          <mesh geometry={nodes.tr_center_gray_0_0.geometry} material={materials.gray_0} />
          <mesh geometry={nodes['tr_center_gray_-3_0'].geometry} material={materials['gray_-3']} />
          <mesh geometry={nodes.tr_center_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes['tr_center_gray_-2_0'].geometry} material={materials['gray_-2']} />
          <mesh geometry={nodes['tr_center_gray_+1_0'].geometry} material={materials.gray_1} />
          <mesh geometry={nodes['tr_center_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes.tr_center_light_2_0.geometry} material={materials.light_2} />
          <mesh geometry={nodes.tr_center_light_3_0.geometry} material={materials.light_3} />
          <mesh geometry={nodes.tr_center_light_4_0.geometry} material={materials.light_4} />
          <mesh geometry={nodes['tr_center002_gray_-2_0'].geometry} material={materials['gray_-2']} position={[0, -0.968, -0.414]} rotation={[-0.651, 0, -Math.PI]} />
          <mesh geometry={nodes['tr_center003_gray_-2_0'].geometry} material={materials['gray_-2']} position={[-0.838, 0.484, -0.414]} rotation={[0.364, 0.552, 0.943]} />
          <mesh geometry={nodes['tr_center004_gray_-2_0'].geometry} material={materials['gray_-2']} position={[0.838, 0.484, -0.414]} rotation={[0.364, -0.552, -0.943]} />
        </group>
        <group position={[-136.554, 256.469, -111.144]} rotation={[0.16, 0, Math.PI]} scale={13.761}>
          <group position={[0, -0.973, -0.432]} rotation={[-0.651, 0, -Math.PI]} scale={[1, 1.187, 1]}>
            <mesh geometry={nodes.tr_center008_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes.tr_center008_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.tr_center008_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes['tr_center008_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes['tr_center008_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
            <mesh geometry={nodes.tr_center008_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes['tr_center008_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.tr_center008_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes.Plane001_light_1_0.geometry} material={materials.light_1} scale={7.42} />
          </group>
          <group position={[0.843, 0.487, -0.432]} rotation={[0.364, -0.552, -0.943]} scale={[1, 1.187, 1]}>
            <mesh geometry={nodes.tr_center012_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes.tr_center012_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.tr_center012_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes['tr_center012_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes['tr_center012_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
            <mesh geometry={nodes.tr_center012_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes['tr_center012_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.tr_center012_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes.Plane004_light_1_0.geometry} material={materials.light_1} scale={7.42} />
          </group>
          <group position={[-0.843, 0.487, -0.432]} rotation={[0.364, 0.552, 0.943]} scale={[-1, 1.187, 1]}>
            <mesh geometry={nodes.tr_center013_bronze_mid_0.geometry} material={materials.bronze_mid} />
            <mesh geometry={nodes.tr_center013_bronze_light_0.geometry} material={materials.bronze_light} />
            <mesh geometry={nodes.tr_center013_bronze_dark_0.geometry} material={materials.bronze_dark} />
            <mesh geometry={nodes['tr_center013_bronze_dark++_0'].geometry} material={materials.bronze_dark_6} />
            <mesh geometry={nodes['tr_center013_bronze_dark+_0'].geometry} material={materials.bronze_dark_11} />
            <mesh geometry={nodes.tr_center013_copper_dark_0.geometry} material={materials.copper_dark} />
            <mesh geometry={nodes['tr_center013_gray_-1_0'].geometry} material={materials['gray_-1']} />
            <mesh geometry={nodes.tr_center013_bronze_add_0.geometry} material={materials.bronze_add} />
            <mesh geometry={nodes.Plane005_light_1_0.geometry} material={materials.light_1} scale={7.42} />
          </group>
          <mesh geometry={nodes.tr_center007_gray_0_0.geometry} material={materials.gray_0} />
          <mesh geometry={nodes['tr_center007_gray_-3_0'].geometry} material={materials['gray_-3']} />
          <mesh geometry={nodes.tr_center007_light_1_0.geometry} material={materials.light_1} />
          <mesh geometry={nodes['tr_center007_gray_-2_0'].geometry} material={materials['gray_-2']} />
          <mesh geometry={nodes['tr_center007_gray_+1_0'].geometry} material={materials.gray_1} />
          <mesh geometry={nodes['tr_center007_gray_-1_0'].geometry} material={materials['gray_-1']} />
          <mesh geometry={nodes.tr_center007_light_2_0.geometry} material={materials.light_2} />
          <mesh geometry={nodes.tr_center007_light_3_0.geometry} material={materials.light_3} />
          <mesh geometry={nodes.tr_center007_light_4_0.geometry} material={materials.light_4} />
          <mesh geometry={nodes['tr_center009_gray_-2_0'].geometry} material={materials['gray_-2']} position={[0, -0.968, -0.414]} rotation={[-0.651, 0, -Math.PI]} />
          <mesh geometry={nodes['tr_center010_gray_-2_0'].geometry} material={materials['gray_-2']} position={[-0.839, 0.484, -0.414]} rotation={[0.364, 0.552, 0.943]} />
          <mesh geometry={nodes['tr_center011_gray_-2_0'].geometry} material={materials['gray_-2']} position={[0.838, 0.484, -0.414]} rotation={[0.364, -0.552, -0.943]} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.symbols_1_copper_0.geometry} material={materials.copper} />
          <mesh geometry={nodes.symbols_1_copper_dark_0.geometry} material={materials.copper_dark} />
        </group>
        <group position={[52.463, 171.748, -0.252]} rotation={[-0.636, 0.999, 0.554]} scale={84.555}>
          <mesh geometry={nodes.symbols_2_copper_0.geometry} material={materials.copper} />
          <mesh geometry={nodes.symbols_2_copper_dark_0.geometry} material={materials.copper_dark} />
        </group>
        <mesh geometry={nodes.tr_center014_light_5_0.geometry} material={materials.light_5} position={[136.554, 256.469, -111.144]} rotation={[0.16, 0, Math.PI]} scale={100.2} />
        <mesh geometry={nodes.tr_center015_light_5_0.geometry} material={materials.light_5} position={[-136.554, 256.469, -111.144]} rotation={[0.16, 0, Math.PI]} scale={[-100.2, 100.2, 100.2]} />
        <mesh geometry={nodes.symbols_1001_copper_0.geometry} material={materials.copper} position={[-10.432, 333.081, 12.875]} rotation={[-0.457, 0.954, -0.622]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/constructsModel.glb')
