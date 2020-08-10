import Head from 'next/head';

// check theme of browser and see dark/light then change favicon

// export main component
export default function Header({ title, theme }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="Personal website and playground for front-end and back-end coding using React and NextJS (v2.0)" />
      <meta name="keywords" content="HTML,CSS,JavaScript" />
      <meta name="author" content="Anika Rede" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="icon" type="image/png" sizes="512x512" href={theme.android1}/>
      <link rel="icon" type="image/png" sizes="192x192" href={theme.android2}/>
      <link rel="apple-touch-icon" sizes="180x180" href={theme.apple}/>
      <link rel="icon" type="image/png" sizes="32x32" href={theme.large}/>
      <link rel="icon" type="image/png" sizes="16x16" href={theme.small}/>
      <link rel="icon" type="image/x-icon" href={theme.reg}/>
      <link rel="manifest" href="static/favicon/site.webmanifest"/>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />

      <title>{title}</title>

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript" />
      <script src="static/scripts/nav-up.js" type="text/javascript" />
      <script src="static/scripts/anchor-assignment.js" type="text/javascript" />
      <script src="static/scripts/mobile-home-hover.js" type="text/javascript" />
      <script src="static/scripts/scroll-top.js" type="text/javascript" />
    </Head>
  )
};
