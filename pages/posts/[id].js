import React from 'react';
// components
import { Header } from '@mainComponents';

export default function Post() {
  return (
    <React.Fragment>
      <Header title="BLOG ❤" />

      <h1> BLOG ❤ </h1>

    </React.Fragment>
  )
};

export async function getStaticPaths() {
  // return list of possible value for id
}

export async function getStaticProps({ params }) {
  // fetch necessary data for blog post using params.id
}
