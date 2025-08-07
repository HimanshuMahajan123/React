import { useContext , createContext, useActionState } from "react";

export const TodoContext = createContext(
    {
        todos : [
            {
                id : 1,
                todo : "Todo message",
                completed : false
            }
        ],
        addTodo : (todo) => {}, //functionality will be defined later in some other file 
        updateTodo : (id , todo) => {},
        deleteTodo : (id) => {},
        toggleComplete : (id) => {}
    }
)

export const TodoProvider = TodoContext.Provider
export const useTodo = () => {
    return useContext(TodoContext)
}