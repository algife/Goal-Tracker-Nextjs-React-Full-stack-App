export default interface Goal {
  id?: number;
  title: string;
  description: string;
  reminder: boolean;
  createdAt?: string;
  deadline?: string;
  completedAt?: string;
}
