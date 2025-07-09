import { TransactionTypeEnum } from '@monetix/shared/config';

export const valuesByTransactionType = (
  value: number,
  type: TransactionTypeEnum,
) => {
  if (type === TransactionTypeEnum.EXPENSE) {
    return value * -1;
  }

  return value;
};
