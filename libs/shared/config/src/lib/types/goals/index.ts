import { TransactionCategoryType } from '../transactions';

export type GoalsType = {
  id: string;
  category: TransactionCategoryType;
  realized: number;
  planed: number;
  progress: number;
  diff: number;
};

export type GoalsResumeType = {
  goals: number;
  actual: number;
  diff: number;
};
