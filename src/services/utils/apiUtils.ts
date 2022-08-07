import { IApiResponse } from '../interfaces/IApiResponse';
import { IKanbanColumn } from '../interfaces/IKanbanColumn';

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
