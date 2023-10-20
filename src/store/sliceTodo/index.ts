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
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = {
          ...state.todos[index],
          body: action.payload.body,
        };
      }
    },
    checkedTodo: (state, action: PayloadAction<CheckedPayload>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = {
          ...state.todos[index],
          checked: action.payload.checked,
        };
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, checkedTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
