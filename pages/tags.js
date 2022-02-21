import { getAllTags } from '/lib/tags'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}


