<template>
  <ul class="todo-list">
    <draggable
      class="todo-list__drag-area"
      v-model="todos"
      @change="updateTodos"
    >
      <transition-group name="list">
        <TodoItem
          v-for="item in todos"
          :key="item.id"
          :todo="item"
        />
      </transition-group>
    </draggable>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { VueDraggableNext } from "vue-draggable-next";
import { mapActions } from "vuex";
export default {
  name: "TodoList",

  components: {
    TodoItem,
    draggable: VueDraggableNext,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(["setTodos"]),
    updateTodos() {
      console.log(this.todos);
      this.setTodos(this.todos);
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
  margin-bottom: 10px;
  list-style-type: none;
  &__drag-area {
    width: 100%;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>