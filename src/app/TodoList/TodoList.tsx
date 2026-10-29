import { useEffect, useState } from 'react';
import { Checkbox, Loader, PageContainer, SearchInput, TextField } from '../../components';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../api/todos';
import type { Todo } from '../../types/todo';
import styles from './TodoList.module.css';

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .finally(() => setIsLoading(false));
  }, []);

  const handleAdd = async () => {
    const title = newTitle.trim();
    if (!title) return;

    const created = await createTodo(title);
    setTodos((prev) => [...prev, created]);
    setNewTitle('');
  };

  const handleToggle = async (todo: Todo) => {
    const updated = await updateTodo({ ...todo, completed: !todo.completed });
    setTodos((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const visibleTodos = todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <PageContainer>
      <h1 className={styles.title}>Todo</h1>

      <div className={styles.toolbar}>
        <SearchInput value={search} onChange={setSearch} onReset={() => setSearch('')} />
      </div>

      <div className={styles.addRow}>
        <TextField
          label="New task"
          placeholder="What needs to be done?"
          value={newTitle}
          onChange={(evt) => setNewTitle(evt.target.value)}
        />
        <button className={styles.addButton} onClick={handleAdd} type="button">
          Add
        </button>
      </div>

      <Loader isLoading={isLoading}>
        <ul className={styles.list}>
          {visibleTodos.map((todo) => (
            <li key={todo.id} className={styles.item}>
              <Checkbox label={todo.title} checked={todo.completed} onChange={() => handleToggle(todo)} />
              <button className={styles.deleteButton} onClick={() => handleDelete(todo.id)} type="button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </Loader>
    </PageContainer>
  );
}
