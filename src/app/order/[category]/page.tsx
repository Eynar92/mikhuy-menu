
export default function OrderPage({ params }: { params: { category: string } }) {

  const { category } = params

  return (
    <div>{category}</div>
  )
}
