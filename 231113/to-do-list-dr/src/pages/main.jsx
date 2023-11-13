import { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import { useEffect } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  const getTodos = () => {
    const localTodos = localStorage.getItem("todos");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    setTodos(parsedTodos);

    setLastTodoId(parsedTodos[parsedTodos.length - 1].id);
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => console.log(lastTodoId), [lastTodoId]);

  return (
    <main className="min-h-screen max-w-screen-md mx-auto">
      <h1 className="text-center text-4xl font-bold py-12">To do list</h1>
      <CreateTodo todos={todos} getTodos={getTodos} lastTodoId={lastTodoId} />
      <ul className="w-96 mx-auto mt-12 h-[30rem] overflow-y-auto">
        {todos.length === 0
          ? "비어있을 때"
          : todos.map((v, i) => {
              return (
                <li className="h-12 flex items-center text-xl">
                  <span className="w-1/12 text-right font-semibold">
                    {v.id}
                  </span>
                  <span className="w-8/12 pl-2 ml-4">{v.title}</span>
                  <button className="w-3/12 hover:font-bold">Detail</button>
                </li>
              );
            })}
      </ul>
    </main>
  );
};

export default Main;
