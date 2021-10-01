import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <div>
                    <Head />
                    <body
                        style={{
                            background: "rgba(17, 24, 39, 1)",
                            colorScheme: "dark",
                        }}
                    >
                        <Main />
                        <NextScript />
                    </body>
                </div>
            </Html>
        );
    }
}
