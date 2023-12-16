import { MantineThemeOverride, em } from "@mantine/core";

const themeConfig: MantineThemeOverride = {
    breakpoints: {
        sm: em(640),
        md: em(768),
        lg: em(1024),
        xl: em(1280),
    }
}

export default themeConfig;