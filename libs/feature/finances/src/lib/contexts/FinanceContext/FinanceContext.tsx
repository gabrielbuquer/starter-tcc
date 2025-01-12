import { ReactNode, createContext, useContext } from 'react';

type FinanceContextProps = {};

export type FinanceContextPropsProviderProps = {
  children: ReactNode;
};

export const FinanceContext = createContext({} as FinanceContextProps);

const FinanceContextProvider = ({
  children,
}: FinanceContextPropsProviderProps) => {

  return (
    <FinanceContext.Provider
      value={{}}
    >
      {children}
    </FinanceContext.Provider>
  );
};

const useFinanceContext = () => {
  return useContext(FinanceContext);
};

export { FinanceContextProvider, useFinanceContext };
