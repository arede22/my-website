import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// components
import { Header } from '@components';
// styles
import { GlobalStyle } from '@styles';

export default function Blog() {
  const ids = ['id1', 'id2', 'id3'];

  return (
    <React.Fragment>

      <head>
        <title> BLOG ❤ </title>
      </head>

      <body>
      <header>
      { // router not set up yet
        ids.map((id) => (
          <Link href="post/[id]" as={`post/${id}`}>
            <a>Post {id}</a>
          </Link>
        ))
      }
      </header>

      <nav>
        <ul>
          <li> A </li>
          <li> N </li>
          <li> A </li>
        </ul>
      </nav>

      <h1> BLOG ❤ </h1>

      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg?crop=0.513xw:1.00xh;0.258xw,0&resize=640:*" />

      <p> OG </p>
      </body>

    </React.Fragment>
  )
};
