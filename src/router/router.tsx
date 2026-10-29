import { createBrowserRouter } from 'react-router';
import { TodoList } from '../app/TodoList/TodoList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoList />,
  },
]);
