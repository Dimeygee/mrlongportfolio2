import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;500&family=Syne:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="dark:bg-[#2D3748] bg-[#FAFCFF] transition duration-[0.1s] delay-[0.1s]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
