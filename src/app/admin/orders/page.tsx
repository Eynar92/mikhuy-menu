'use client';
import useSWR from 'swr';
import { OrderCard } from '@/components/order';
import { Heading } from '@/components/ui'
import { OrderWithProducts } from '@/interfaces/product';

export default function OrdersPage() {

  const url = '/admin/orders/api';

  const fetcher = () => fetch(url)
    .then(res => res.json())
    .then(data => data);

  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return 'Cargando...'

  if (data) return (
    <>
      <div className='flex items-baseline gap-2'>
        <Heading>Administrar Ordenes</Heading> <span>({data.length})</span>
      </div>


      {data.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
          {
            data.map(order => (
              <OrderCard
                key={order.id}
                order={order}
              />
            ))
          }
        </div>
      ) : (
        <p className='text-center'>No hay ordenes pendientes</p>
      )}
    </>
  )
}
