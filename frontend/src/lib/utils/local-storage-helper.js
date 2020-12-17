export const saveState = (state) => {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
}
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState) return JSON.parse(serializedState)
        return undefined
    } catch (e) {
        return undefined
    }
} 