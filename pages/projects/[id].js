import React from 'react';
import { getAllProjectIds, getProjectData } from 'lib/projects'
// components
import { Header } from '@mainComponents';

export default function Project({ projectData }) {
  return (
    <React.Fragment>
      <Header title={projectData.title} />

      <h1> Projects ❤ </h1>

      <div>
      {projectData.title}
      <br />
      {projectData.id}
      <br />
      {projectData.date}
      </div>

    </React.Fragment>
  )
};

export async function getStaticPaths() {
  // return list of possible value for id
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // fetch necessary data for blog post using params.id
  const projectData = getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}
