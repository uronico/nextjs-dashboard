import React from 'react';

import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';

async function getDashboardData() {
  return {
    totalPaidInvoices: 120,
    totalPendingInvoices: 15,
    numberOfInvoices: 135,
    numberOfCustomers: 42,
  };
}

export default async function Page() {
  const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } =
    await getDashboardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <Suspense fallback={<CardsSkeleton />}>
        <CardWrapper
          totalPaidInvoices={totalPaidInvoices}
          totalPendingInvoices={totalPendingInvoices}
          numberOfInvoices={numberOfInvoices}
          numberOfCustomers={numberOfCustomers}
        />
      </Suspense>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart />
        <LatestInvoices />
      </div>
    </main>
  );
}