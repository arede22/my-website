import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// components
import { Header } from '@mainComponents';

// blog https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs

export default function Blog({ json }) {
  const [stars, forks] = [json.stargazers_count, json.forks_count];

  return (
    <React.Fragment>
      <Header title="BLOG ❤" />

      <h1> BLOG ❤ </h1>
      {!!stars && !!forks &&
        <ul>
          <li>{stars}</li>
          <li>{forks}</li>
        </ul>
      }

      <img loading="lazy" height='60' width='60' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mocking-spongebob-1556133078.jpg?crop=0.513xw:1.00xh;0.258xw,0&resize=640:*" />

      <p> OG </p>

    </React.Fragment>
  )
};

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch('https://api.github.com/repos/arede22/theanikarede');
  const json = await res.json();

  return {
    props: {
      json,
    }
  }
}
