import {TodolistType} from "../App";

export const TodoListReducer = (state: TodolistType[], action: TodoListReducerActionType) => {
    switch (action.type) {
        case "XXX": {
            return state.filter(el => el.id !== action.payload.todoListId1)
        }
        default:
            return state
    }
}

type TodoListReducerActionType = TodoListReducerAC

type TodoListReducerAC = ReturnType<typeof RemoveTodoListAC>

export const RemoveTodoListAC = (todoListId1: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            todoListId1
        }
    }
}

