import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CheckedPayload, Todo, UpdatePayload } from "../../types";

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<UpdatePayload>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, body: action.payload.body }
          : item,
      );
    },
    checkedTodo: (state, action: PayloadAction<CheckedPayload>) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, checked: action.payload.checked }
          : item,
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, checkedTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
