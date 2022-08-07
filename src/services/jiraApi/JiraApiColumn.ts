import { IKanbanColumn } from '../interfaces/IKanbanBoard';
import { convertApiResponseKanbanColumn, firebaseCollectionNames } from '../utils/apiUtils';
import { JiraApiInstance } from './JiraApiBase';

export const getKanbanColumns = async (): Promise<Array<IKanbanColumn>> => {
  const res = await JiraApiInstance.get(
    firebaseCollectionNames.kanbanColumn
  ).catch((error: Error) => {
    console.log("Error getting kanban column from Firebase ", error);
  });
  if (!res) {
    return [];
  }
  return convertApiResponseKanbanColumn(res.data.documents);
};
