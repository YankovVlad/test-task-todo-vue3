<template>
  <img
    src="../assets/todo_illustration.png"
    alt="The illustration shows a man marking completed tasks"
    class="todo-app__illustration"
  >
  <h6 class="todo-app__title">{{ title }}</h6>
</template>

<script>
export default {
  name: "TodoHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>