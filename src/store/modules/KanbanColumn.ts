import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

import { IKanbanColumn } from '@/services/interfaces/IKanbanBoard';

import store from '../index';

@Module({ dynamic: true, store: store, name: "ColumnModule" })
class ColumnModule extends VuexModule {
  _columns: Array<IKanbanColumn> = [];

  get columns() {
    return this._columns;
  }

  @Mutation
  setColumns(columns: Array<IKanbanColumn>) {
    this._columns = columns;
  }
}

export default getModule(ColumnModule);
