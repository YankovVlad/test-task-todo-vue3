import { createStore } from 'vuex'
import TodoModel from '../models/todoModel'

export default createStore({
  state: {
    allTodos: []
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
      state.allTodos = [payload, ...state.allTodos]
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
    },
    UPDATE_TODOS: (state, payload) => {
      state.allTodos = payload
      localStorage.setItem('todos', JSON.stringify(payload))
    }
  },
  actions: {
    fetchTodos: ({commit}) => {
      const todos = JSON.parse(localStorage.getItem('todos')).map(item => new TodoModel(item)) || []
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
    },
    setTodos: ({commit}, payload) => {
      commit('UPDATE_TODOS', payload)
    }
  }
})