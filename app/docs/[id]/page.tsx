const DocsIdPage = ({ params }: { params: { id: string } }) => {
  const { id } = params
  console.log({ id })

  // throw new Error('Docs id Error')

  return <div>docs id page with id: {id}</div>
}

export default DocsIdPage
