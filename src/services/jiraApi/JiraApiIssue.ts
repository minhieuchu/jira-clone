import { IKanbanIssue } from '../interfaces/IKanbanBoard';
import { convertApiResponseKanbanIssue, firebaseCollectionNames } from '../utils/apiUtils';
import { JiraApiInstance } from './JiraApiBase';

export const getKanbanIssues = async (): Promise<Array<IKanbanIssue>> => {
  const res = await JiraApiInstance.get(
    firebaseCollectionNames.kanbanIssue
  ).catch((error: Error) => {
    console.log("Error getting kanban issues ", error);
  });
  if (!res) {
    return [];
  }
  return convertApiResponseKanbanIssue(res.data.documents);
};
