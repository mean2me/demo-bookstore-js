import { createContext } from 'react'

const UIContext = createContext({
    drawer: false,
    toggleDrawer: () => {}
})

export default UIContext