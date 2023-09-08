import {DARK, BASIC, LIGHT} from './theme';
import {THEMES} from './themeList';

export const getTheme = (themeName) => {
  switch(themeName){
    case THEMES.DARK: return DARK;
    case THEMES.LIGHT: return LIGHT;
    default: return BASIC;
  }
}