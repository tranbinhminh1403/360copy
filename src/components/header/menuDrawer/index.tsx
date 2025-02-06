import BasicDrawer from '../../common/drawer'

const Sidemenu = ({open, onClose}: {open: boolean, onClose: () => void}) => {
  return (
    <div>
        <BasicDrawer open={open} onClose={onClose}>
            <p>Hello</p>
        </BasicDrawer>
    </div>
  )
}

export default Sidemenu