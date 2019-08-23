import Typography from "typography"
import StowLake from "typography-theme-stow-lake"

StowLake.overrideThemeStyles = () => {
  return {
    "a": {
      color: `#ccdfdd`,
    },
  }
}

delete StowLake.googleFonts

const typography = new Typography(StowLake)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
