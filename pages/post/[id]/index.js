import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Header } from '@components'

// export main component
export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <React.Fragment>
      <Header />
      <h1>Blog ❤ Post: {id}</h1>

      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  )
}
