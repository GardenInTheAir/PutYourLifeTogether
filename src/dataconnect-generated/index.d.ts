import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateTaskData {
  task_insert: Task_Key;
}

export interface DeleteTaskData {
  task_delete?: Task_Key | null;
}

export interface DeleteTaskVariables {
  taskId: UUIDString;
}

export interface ListMyTasksData {
  tasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    isCompleted: boolean;
    dueDate?: DateString | null;
    category?: {
      id: UUIDString;
      name: string;
    } & Category_Key;
  } & Task_Key)[];
}

export interface Task_Key {
  id: UUIDString;
  __typename?: 'Task_Key';
}

export interface UpdateTaskCompletionData {
  task_update?: Task_Key | null;
}

export interface UpdateTaskCompletionVariables {
  taskId: UUIDString;
  isCompleted: boolean;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateTaskData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateTaskData, undefined>;
  operationName: string;
}
export const createTaskRef: CreateTaskRef;

export function createTask(): MutationPromise<CreateTaskData, undefined>;
export function createTask(dc: DataConnect): MutationPromise<CreateTaskData, undefined>;

interface ListMyTasksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyTasksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyTasksData, undefined>;
  operationName: string;
}
export const listMyTasksRef: ListMyTasksRef;

export function listMyTasks(): QueryPromise<ListMyTasksData, undefined>;
export function listMyTasks(dc: DataConnect): QueryPromise<ListMyTasksData, undefined>;

interface UpdateTaskCompletionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTaskCompletionVariables): MutationRef<UpdateTaskCompletionData, UpdateTaskCompletionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTaskCompletionVariables): MutationRef<UpdateTaskCompletionData, UpdateTaskCompletionVariables>;
  operationName: string;
}
export const updateTaskCompletionRef: UpdateTaskCompletionRef;

export function updateTaskCompletion(vars: UpdateTaskCompletionVariables): MutationPromise<UpdateTaskCompletionData, UpdateTaskCompletionVariables>;
export function updateTaskCompletion(dc: DataConnect, vars: UpdateTaskCompletionVariables): MutationPromise<UpdateTaskCompletionData, UpdateTaskCompletionVariables>;

interface DeleteTaskRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTaskVariables): MutationRef<DeleteTaskData, DeleteTaskVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTaskVariables): MutationRef<DeleteTaskData, DeleteTaskVariables>;
  operationName: string;
}
export const deleteTaskRef: DeleteTaskRef;

export function deleteTask(vars: DeleteTaskVariables): MutationPromise<DeleteTaskData, DeleteTaskVariables>;
export function deleteTask(dc: DataConnect, vars: DeleteTaskVariables): MutationPromise<DeleteTaskData, DeleteTaskVariables>;

