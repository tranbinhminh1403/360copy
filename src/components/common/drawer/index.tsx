import { Drawer } from 'antd'
import React from 'react'
import styles from './styles.module.scss'

const BasicDrawer = ({open, children, onClose}: {open: boolean, children: React.ReactNode, onClose: () => void}) => {
  return (
    <Drawer className={styles.drawer} open={open} onClose={onClose} closable={false} footer={null}>
      {children}
    </Drawer>
  )
}

export default BasicDrawer