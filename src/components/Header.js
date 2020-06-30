import React from 'react';
import Head from 'next/head';

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0;
`;

// main component
const Header = () => (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="../../static/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../../static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../../static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../../static/favicon/site.webmanifest"/>

      <title>Anika Rede: Software Engineer</title>

      <script async src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" />
      <script async src="../../static/scripts/nav-up.js" />
      <script async src="../../static/scripts/modal.js" />
    </Head>
);

// export
export default Header;
