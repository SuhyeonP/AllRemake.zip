import Document, {Head, Html, Main, NextScript} from 'next/document';


export default class RootDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport"
                          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"/>
                    <meta name="description" content="My First Static Website"/>
                    <meta name="keywords" content="nextjs,static,website"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
