import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette:{
        primary:{
            main: '#3d3d35'
        }
    },
    typography: {
        fontFamily: ['"Ubuntu"', 'sans-serif'].join(','),
        fontSize: 16,
    }
})

export default theme;