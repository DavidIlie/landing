import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import AppLayout from "../components/AppLayout";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const LandingPage = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider defaultTheme="dark">
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </ThemeProvider>
    );
};

export default LandingPage;
