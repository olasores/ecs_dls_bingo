export interface BingoTask {
  id: number;
  task: string;
  proofType: 'photo' | 'text' | 'screenshot';
  description: string;
  completed: boolean;
  proof?: string;
}

export interface BingoCell {
  task: BingoTask;
  isSelected: boolean;
}

export interface CompletedTask {
  taskId: number;
  proof: string;
  timestamp: number;
  status: 'pending' | 'approved' | 'rejected';
}

export type BingoLine = {
  type: 'row' | 'column' | 'diagonal';
  index?: number; // For rows and columns
  direction?: 'left' | 'right'; // For diagonals
};