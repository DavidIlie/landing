import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

import AppLayout from "../components/AppLayout";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const LandingPage = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <DefaultSeo
                defaultTitle="David Ilie Apps Platform"
                openGraph={{
                    title: "David Ilie Apps Platform",
                    type: `website`,
                    site_name: "David Ilie Apps Platform",
                    description: "Landing page used for unused domains.",
                }}
                description="Landing page used for unused domains."
            />
            <ThemeProvider defaultTheme="dark">
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </ThemeProvider>
        </>
    );
};

export default LandingPage;
