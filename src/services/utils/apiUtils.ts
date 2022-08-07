import { IApiResponse } from '../interfaces/IApiResponse';
import { IKanbanColumn, IKanbanIssue } from '../interfaces/IKanbanBoard';

export const firebaseCollectionNames = {
  kanbanColumn: "kanbanColumn",
  kanbanIssue: "kanbanIssue",
};

export const convertApiResponseKanbanColumn = (
  columns: Array<IApiResponse>
): Array<IKanbanColumn> => {
  return columns.map((column) => {
    return {
      status: column.fields.status.stringValue,
      columnIndex: +column.fields.columnIndex.integerValue,
    };
  });
};

export const convertApiResponseKanbanIssue = (
  issues: Array<IApiResponse>
): Array<IKanbanIssue> => {
  return issues.map((issue) => {
    return {
      status: issue.fields.status.stringValue,
      title: issue.fields.title.stringValue,
      priority: issue.fields.priority.stringValue,
      type: issue.fields.type.stringValue,
      description: issue.fields.description.stringValue,
      estimateHour: +(
        issue.fields.estimateHour.integerValue ??
        issue.fields.estimateHour.doubleValue
      ),
    };
  });
};
