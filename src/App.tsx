import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "Router";
import themeConfig from "themeConfig";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider
                withCSSVariables
                withGlobalStyles
                withNormalizeCSS
                theme={themeConfig}
            >
                <Router />
            </MantineProvider>
        </QueryClientProvider>
    );
}

export default App;
