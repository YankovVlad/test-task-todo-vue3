import { createStore } from 'vuex'


export default createStore({
  state: {
    allTodos: [
      {
        id: '1',
        name: 'todo',
        completed: false
      }
    ]
  },
  getters: {
    todos: (state) => state.allTodos
  },
  mutations:{
    SET_TODOS: (state, payload) => {
      state.allTodos = payload
    },
    ADD_TODO: (state, payload) => {
      localStorage.setItem('todos', JSON.stringify([...state.allTodos, payload]))
      state.allTodos = [...state.allTodos, payload]
    },
    DELETE_TODO: (state, id) => {
      const filteredTodos = state.allTodos.filter(todo => todo.id !== id)
      state.allTodos = filteredTodos
      localStorage.setItem('todos', JSON.stringify(filteredTodos))
    },
    EDIT_TODO: (state, payload) => {
      const targetIndex = state.allTodos.indexOf(state.allTodos.find(todo => todo.id === payload.id))
      const mapedTodos = [...state.allTodos]
      mapedTodos.splice(targetIndex, 1, payload)
      state.allTodos = mapedTodos
      localStorage.setItem('todos', JSON.stringify(mapedTodos))
    }
  },
  actions: {
    fetchTodos: ({commit}) => {
      const todos = JSON.parse(localStorage.getItem('todos')) || []
      commit('SET_TODOS', todos)
    },
    addTodo: ({commit}, payload) => {
      commit('ADD_TODO', payload)
    },
    deleteTodo:({commit}, payload) => {
      commit('DELETE_TODO', payload)
    },
    editTodo:({commit}, payload) => {
      commit('EDIT_TODO', payload)
    }
  }
})