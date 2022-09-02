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
  max-height: 15vh;
  overflow-y: scroll;
  margin-bottom: 10px;
  list-style-type: none;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: $br-s;
    box-shadow: inset 0 0 6px $color-grey-1;
  }
  &__drag-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  transform: translateY(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>