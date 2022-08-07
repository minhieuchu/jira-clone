import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

import { IKanbanIssue } from '@/services/interfaces/IKanbanBoard';

import store from '../index';

@Module({ dynamic: true, store: store, name: "KanbanIssue" })
class IssueModule extends VuexModule {
  _issues: Array<IKanbanIssue> = [];

  get issues() {
    return this._issues;
  }

  get issuesWithStatus() {
    return (status: string) =>
      this._issues.filter((issue) => issue.status == status);
  }

  @Mutation
  setIssues(issues: Array<IKanbanIssue>) {
    this._issues = issues;
  }
}

export default getModule(IssueModule);
