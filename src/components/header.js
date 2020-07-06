import React from 'react';
import Head from 'next/head';

// export main component
export default function Header() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../../static/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../../static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../../static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../../static/favicon/site.webmanifest"/>

      <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />

      <title>Anika Rede: Software Engineer</title>

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript" />
      <script src="../../static/scripts/resizing.js" type="text/javascript" />
      <script src="../../static/scripts/nav-up.js" type="text/javascript" />
      <script src="../../static/scripts/anchor-assignment.js" type="text/javascript" />
      {/*<script src="../../static/scripts/modal-loader.js" type="text/javascript" />*/}
      <script src="../../static/scripts/mobile-home-hover.js" type="text/javascript" />
      <script src="../../static/scripts/scroll-top.js" type="text/javascript" />
    </Head>
  )
};
