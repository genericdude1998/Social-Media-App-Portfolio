export function applyToggleTheme(state,action){
    const currentTheme = state.theme;
    return{...state, theme: (currentTheme==='light'? 'dark': 'light')}
}