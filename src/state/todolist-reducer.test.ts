import {v1} from "uuid";
import {TodolistType} from "../App";
import {removeTodoListAC, TodolistReducer} from "./todolist-reducer";


test("correct todolist should be removed", () => {
    let todoListId1 = v1();
    let todoListId2 = v1();

    const startState: TodolistType[] = [
        {id: todoListId1, title: "What to learn", filter: "all"},
        {id: todoListId2, title: "What to buy", filter: "all"}
    ]

    // const endState = TodolistReducer(startState, {type: 'REMOVE-TODOLIST', id: todoListId1})

    const endState = TodolistReducer(startState, removeTodoListAC(todoListId1))

    // expect(endState.length).toBe(1);
    // expect(endState[0].id).toBe(todoListId2);

})