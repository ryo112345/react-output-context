import { InputForm } from "../../atoms";
import { AddTodo, TodoList } from "../../organisms";
import { useTodoContext } from "../../../hooks/useTodoContext";
import styles from "./style.module.css";

export const TodoTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const {
    addInputValue,
    searchKeyword,
    showTodoList,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  } = useTodoContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
