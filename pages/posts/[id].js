import React from 'react';
import { getAllPostIds, getPostData } from 'lib/posts'
// components
import { Header } from '@mainComponents';

export default function Post({ postData }) {
  return (
    <React.Fragment>
      <Header title="BLOG ❤" />

      <h1> BLOG ❤ </h1>

      <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      </div>

    </React.Fragment>
  )
};

export async function getStaticPaths() {
  // return list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // fetch necessary data for blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
