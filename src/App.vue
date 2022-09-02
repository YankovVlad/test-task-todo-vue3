
<template>
  <div class="app">
    <TodoApp />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TodoApp from "./components/TodoApp.vue";
export default {
  name: "App",
  components: {
    TodoApp,
  },
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
};
</script>


<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
      0deg,
      #e0c3fc 0%,
      #d7befc 21.87%,
      #bcb1fc 42.19%,
      #a1aefc 60.94%,
      #94bdfc 80.73%,
      #8ec5fc 100%
    ),
    linear-gradient(
      0deg,
      #84fab0 0%,
      #85f9bc 21.87%,
      #88f8d7 42.19%,
      #8bf6f5 60.94%,
      #8eddf5 80.73%,
      #8fd3f4 100%
    );
}
</style>
