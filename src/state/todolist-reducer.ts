import {TodolistType} from "../App";


export const TodolistReducer = (state: TodolistType[], action: TodolistReducerActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {

            // function removeTodolist(id: string) {
            //     // засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
            //     setTodolists(todolists.filter(tl => tl.id != id));
            //     // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
            //     delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
            //     // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            //     setTasks({...tasks});
            // }


            return state.filter(el => el.id !== action.payload.todoListId1)
        }
        default:
            return state
    }

}

type TodolistReducerActionType = RemoveTodoListACType


type RemoveTodoListACType = ReturnType<typeof RemoveTodoListAC>

export const RemoveTodoListAC = (todoListId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todoListId1
        }
    } as const
}