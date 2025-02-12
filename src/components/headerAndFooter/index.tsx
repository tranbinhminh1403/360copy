import React from 'react'
import Header from '../header'
import Footer from '../footer'
import BasicModal from '../modal'
import DocContent from './docContent'
import AboutContent from './aboutContent'
import { useState } from 'react'

const HeaderAndFooter = ({children}: {children: React.ReactNode}) => {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  return (
    <div>
        <BasicModal open={open} onCancel={() => {setOpen(false)}}>
            <DocContent />
        </BasicModal>
        <BasicModal open={aboutOpen} onCancel={() => {setAboutOpen(false)}}>
            <AboutContent />
        </BasicModal>
        <Header openModal={() => {setOpen(true)}} openAboutModal={() => {setAboutOpen(true)}} />
        {children}
        <a id="footer">
            <Footer openModal={() => {setOpen(true)}} openAboutModal={() => {setAboutOpen(true)}} />
        </a>
    </div>
  )
}

export default HeaderAndFooter