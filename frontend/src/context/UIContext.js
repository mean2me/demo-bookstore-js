import { createContext } from 'react'

const UIContext = createContext({
    page: 0,
    setPage: (page) => {},
    drawer: false,
    toggleDrawer: () => {}
})

export default UIContext