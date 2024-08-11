'use client'

const ErrorUi = ({ error }: { error: { message: string } }) => {
  const { message } = error
  return (
    <div>
      <div>....ooops!!</div>
      <div>Error message: {message}</div>
    </div>
  )
}

export default ErrorUi
