import { Todo } from "../slice/todoSlice";
import { User } from "../slice/userSlice";

export const users: User[] = [
    {id: 1, age: 10, name: "test1"},
    {id: 2, age: 20, name: "test2"},
    {id: 3, age: 30, name: "test3"},
    {id: 4, age: 40, name: "test4"},
    {id: 5, age: 50, name: "test5"},
    {id: 6, age: 60, name: "test6"},
    {id: 7, age: 70, name: "test7"},
    {id: 8, age: 80, name: "test8"},
    {id: 9, age: 90, name: "test9"},
    {id: 10, age: 100, name: "test10"},
];

export const todos: Todo[] = [
    {id: 1, title: "todo 1", isSelected: false},
    {id: 2, title: "todo 2", isSelected: false},
    {id: 3, title: "todo 3", isSelected: false},
    {id: 4, title: "todo 4", isSelected: false},
    {id: 5, title: "todo 5", isSelected: false},
    {id: 6, title: "todo 6", isSelected: false},
    {id: 7, title: "todo 7", isSelected: false},
    {id: 8, title: "todo 8", isSelected: false},
    {id: 9, title: "todo 9", isSelected: false},
    {id: 10, title: "todo 10", isSelected: false},
]