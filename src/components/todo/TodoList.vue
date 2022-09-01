<template>
  <ul class="todo-list">
    <TodoItem
      v-for="item in todos"
      :key="item.id"
      :todo="item"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",

  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style-type: none;
}
</style>