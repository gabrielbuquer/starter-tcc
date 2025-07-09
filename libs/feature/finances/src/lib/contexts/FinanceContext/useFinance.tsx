import { useContext } from 'react';

import { FinanceContext } from './FinanceContext';

export function useFinanceContext() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error(
      'useFinanceContext must be used within a FinanceContextProvider',
    );
  }
  return context;
}
