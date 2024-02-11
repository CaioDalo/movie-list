
export function Paginator(props: { totalPages: number }) {
  const { totalPages } = props
  return (
    <p>{totalPages}</p>
  )
}
