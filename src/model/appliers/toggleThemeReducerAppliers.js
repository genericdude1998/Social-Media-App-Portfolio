export function applyToggleTheme(state){
    const currentTheme = state.theme;
    return{...state, theme: (currentTheme==='light'? 'dark': 'light')}
}