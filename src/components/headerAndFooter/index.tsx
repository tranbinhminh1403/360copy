import React from 'react'
import Header from '../header'
import Footer from '../footer'
import BasicModal from '../modal'
import DocContent from './docContent'
import { useState } from 'react'

const HeaderAndFooter = ({children}: {children: React.ReactNode}) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
        <BasicModal open={open} onCancel={() => {setOpen(false)}}>
            <DocContent />
        </BasicModal>
        <Header openModal={() => {setOpen(true)}} />
        {children}
        <a id="footer">
            <Footer openModal={() => {setOpen(true)}} />
        </a>
    </div>
  )
}

export default HeaderAndFooter