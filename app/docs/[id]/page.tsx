const DocsIdPage = ({ params }) => {
  const { id } = params
  console.log({ id })

  // throw new Error('Docs id Error')

  return <div>docs id page with id: {id}</div>
}

export default DocsIdPage
