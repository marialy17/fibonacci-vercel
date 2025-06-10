// app/page.tsx
export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Fibonacci API</h1>
      <p className="mt-2">Endpoint: <code>/api/fibonacci?n=10</code></p>
      <p className="mt-1">Donde <code>n</code> es el número de elementos a generar</p>
    </div>
  )
}