export interface IKanbanColumn {
  status: string;
  columnIndex: number;
}

export interface IKanbanIssue {
  title: string;
  description: string;
  status: string;
  priority: string;
  type: string;
  estimateHour: number;
}
