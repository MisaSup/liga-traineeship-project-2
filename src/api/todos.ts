import type { Todo } from '../types/todo';

const API_URL = 'http://localhost:3001';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const getTodos = () => request<Todo[]>('/todos');

export const createTodo = (title: string) =>
  request<Todo>('/todos', {
    method: 'POST',
    body: JSON.stringify({ title, completed: false }),
  });

export const updateTodo = (todo: Todo) =>
  request<Todo>(`/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
  });

export const deleteTodo = (id: string) => request<Todo>(`/todos/${id}`, { method: 'DELETE' });
