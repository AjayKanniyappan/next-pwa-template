import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <title>Next PWA Template</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

export default Meta;
