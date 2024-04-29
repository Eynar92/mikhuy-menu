import { OrderCard } from '@/components/order';
import { Heading } from '@/components/ui'
import { prisma } from '@/lib/prisma'
import React from 'react'

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  });

  return orders;
}

export default async function OrdersPage() {

  const orders = await getPendingOrders();

  return (
    <>
      <div className='flex items-baseline gap-2'>
        <Heading>Administrar Ordenes</Heading> <span>({orders.length})</span>
      </div>
      {orders.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5'>
          {
            orders.map(order => (
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
