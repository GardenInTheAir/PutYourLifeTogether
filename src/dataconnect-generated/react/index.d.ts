import { CreateTaskData, ListMyTasksData, UpdateTaskCompletionData, UpdateTaskCompletionVariables, DeleteTaskData, DeleteTaskVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateTask(options?: useDataConnectMutationOptions<CreateTaskData, FirebaseError, void>): UseDataConnectMutationResult<CreateTaskData, undefined>;
export function useCreateTask(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTaskData, FirebaseError, void>): UseDataConnectMutationResult<CreateTaskData, undefined>;

export function useListMyTasks(options?: useDataConnectQueryOptions<ListMyTasksData>): UseDataConnectQueryResult<ListMyTasksData, undefined>;
export function useListMyTasks(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyTasksData>): UseDataConnectQueryResult<ListMyTasksData, undefined>;

export function useUpdateTaskCompletion(options?: useDataConnectMutationOptions<UpdateTaskCompletionData, FirebaseError, UpdateTaskCompletionVariables>): UseDataConnectMutationResult<UpdateTaskCompletionData, UpdateTaskCompletionVariables>;
export function useUpdateTaskCompletion(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateTaskCompletionData, FirebaseError, UpdateTaskCompletionVariables>): UseDataConnectMutationResult<UpdateTaskCompletionData, UpdateTaskCompletionVariables>;

export function useDeleteTask(options?: useDataConnectMutationOptions<DeleteTaskData, FirebaseError, DeleteTaskVariables>): UseDataConnectMutationResult<DeleteTaskData, DeleteTaskVariables>;
export function useDeleteTask(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteTaskData, FirebaseError, DeleteTaskVariables>): UseDataConnectMutationResult<DeleteTaskData, DeleteTaskVariables>;
