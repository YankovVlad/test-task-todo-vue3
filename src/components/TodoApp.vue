<template>
  <div class="todo-app">
    <div class="todo-app__body">
      <TodoHeader title="Today I need to" />
      <CreateTodoForm class="todo-app__form" />
      <TodoList :todos="todos" />
    </div>

    <TodoFooter :todos="todos" />
  </div>
</template>

<script>
import TodoFooter from "./TodoFooter.vue";
import TodoHeader from "./TodoHeader.vue";
import CreateTodoForm from "../components/ui/CreateTodoForm.vue";
import TodoList from "./todo/TodoList.vue";

import { mapGetters } from "vuex";
export default {
  name: "TodoApp",
  components: {
    CreateTodoForm,
    TodoList,
    TodoHeader,
    TodoFooter,
  },
  computed: {
    ...mapGetters(["todos"]),
  },
};
</script>

<style lang="scss">
.todo-app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 80vh;
  padding: 32px 90px;
  background-color: $color-grey-0;
  border-radius: $br-l;
  @include xl {
    padding: 32px 160px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__illustration {
    width: 20vh;
    max-width: 180px;
    height: 20vh;
    max-height: 180px;
  }
  &__title {
    margin: 3vh 0;
    @include fontSize("l");
    font-weight: 700;
  }
  &__form {
    margin-bottom: 2vh;
  }
}
</style>