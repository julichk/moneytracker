import { getFromStorage } from "../../utils/sessionStorage"
import { THEMES } from "../themes/themeList"

export default{
  currency: 'UAH',
  themeName: getFromStorage('themeName') || THEMES.LIGHT
}