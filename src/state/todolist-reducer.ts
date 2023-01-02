import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export const TodolistReducer = (state: TodolistType[], action: TodolistReducerActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todoListId1)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(el => el.id === action.payload.todolistId ? {...el, title: action.payload.value} : el)
        }
        default:
            return state
    }

}

type TodolistReducerActionType =
    RemoveTodoListACType
    | AddTodoListACType
    | ChangeTodoListTitleACType
    | ChangeTodoListFilterACType;


type RemoveTodoListACType = ReturnType<typeof removeTodoListAC>
type AddTodoListACType = ReturnType<typeof addTodolist>
type ChangeTodoListTitleACType = ReturnType<typeof changeTodoListTitle>
type ChangeTodoListFilterACType = ReturnType<typeof changeTodoListFilter>

export const removeTodoListAC = (todoListId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todoListId1
        }
    } as const
}
export const addTodolist = (newTodoListTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title: newTodoListTitle
        }
    } as const
}

export const changeTodoListTitle = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            title: title,
            id: id
        }
    } as const
}
export const changeTodoListFilter = (value: FilterValuesType, todolistId: string) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            value: value,
            todolistId: todolistId
        }
    } as const
}