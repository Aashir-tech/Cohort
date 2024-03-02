// import { atomFamily } from "recoil";
// import { TODOS } from "./todos";

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: id => {
//     return TODOS.find(x => x.id === id)
//   },
// });

import {atomFamily} from 'recoil' ;
import { TODOS } from './todos'

export const todosAtomFamily = atomFamily({
  key : "todosAtomFamily",
  default : id => {
    let foundTodo = []
    for(let i=0; i < TODOS.length; i++) {
      if(TODOS.id[i] === id) {
        foundTodo = TODOS[i]
      }
    }
    return foundTodo
  }
  // default : id => {
  //   return TODOS.find(x => x.id === id)
  // }
})