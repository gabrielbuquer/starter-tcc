import { ReactNode } from 'react';

import { MainLayout } from '@monetix/shared/ui';

import { QuickMenu } from '../components/QuickMenu';
import { FinanceContextProvider } from '../contexts/FinanceContext';

export function FinanceLayout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <FinanceContextProvider>
        {children}
        <QuickMenu />
      </FinanceContextProvider>
    </MainLayout>
  );
}
