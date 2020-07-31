import React from 'react';
import Link from 'next/link';
// components
import { Header } from '@components';
// styles
import { GlobalStyle } from '@styles';

export default function Blog() {
  const pids = ['id1', 'id2', 'id3'];

  return (
    <React.Fragment>
      <GlobalStyle />

      <head>
        <title> BLOG ❤ </title>
      </head>

      { // not working yet
        pids.map((pid) => (
          <Link href="post/[pid]" as={`post/${pid}`}>
            <a>Post {pid}</a>
          </Link>
        ))
      }

      <nav>
        <ul>
          <li> A </li>
          <li> N </li>
          <li> A </li>
        </ul>
      </nav>

      <h1> BLOG ❤ </h1>

      <p> OG </p>

    </React.Fragment>
  )
};
