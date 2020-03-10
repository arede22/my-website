import React from 'react';
import Head from 'next/head';
import styled, { css } from 'styled-components';

// use flexbox
// position: relative; to make B move relative to A and C divs

const Header = () => (
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="../../static/favicon/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="../../static/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="../../static/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="../../static/favicon/site.webmanifest"/>

    <title>Anika Rede: Software Engineer </title>

    <script async src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" />
    <script async src="../../static/nav-up.js" />
    <script async src="../../static/modal.js" />
  </Head>

)

export default Header
