'use client'

const ErrorDocsId = (props: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  console.log({ props })
  return <div>Error Docs id</div>
}

export default ErrorDocsId
