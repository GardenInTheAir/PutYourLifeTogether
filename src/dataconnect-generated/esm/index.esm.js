import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'putyourlifetogether',
  location: 'us-central1'
};

export const createTaskRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTask');
}
createTaskRef.operationName = 'CreateTask';

export function createTask(dc) {
  return executeMutation(createTaskRef(dc));
}

export const listMyTasksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyTasks');
}
listMyTasksRef.operationName = 'ListMyTasks';

export function listMyTasks(dc) {
  return executeQuery(listMyTasksRef(dc));
}

export const updateTaskCompletionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateTaskCompletion', inputVars);
}
updateTaskCompletionRef.operationName = 'UpdateTaskCompletion';

export function updateTaskCompletion(dcOrVars, vars) {
  return executeMutation(updateTaskCompletionRef(dcOrVars, vars));
}

export const deleteTaskRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTask', inputVars);
}
deleteTaskRef.operationName = 'DeleteTask';

export function deleteTask(dcOrVars, vars) {
  return executeMutation(deleteTaskRef(dcOrVars, vars));
}

