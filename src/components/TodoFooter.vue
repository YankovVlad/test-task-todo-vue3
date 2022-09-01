<template>
  <div
    v-if="noTodos"
    class="todo-footer__no-todo-message"
  >
    <IconCheck class="todo-footer__no-todo-message-icon" />
    <span class="todo-footer__no-todo-message-text">Congrat, you have no more tasks to do</span>
  </div>

  <div
    class="todo-footer"
    v-else
  >
    <div class="todo-footer__charts">
      <ChartCard
        v-for="chart in charts"
        :key="chart.title"
        :title="chart.title"
        :chart-color="chart.chartColor"
        :count="chart.value"
        :total="chart.total"
      />

    </div>

    <div class="todo-footer__sorting">
      123
    </div>

  </div>
</template>

<script>
import ChartCard from "./ui/ChartCard.vue";
import IconCheck from "./icons/IconCheck.vue";
export default {
  name: "TodoFooter",
  components: {
    IconCheck,
    ChartCard,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    noTodos() {
      return !this.todos.length;
    },
    completedTodosLength() {
      return this.todos.filter((todo) => todo.completed).length;
    },
    openTodosLength() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    charts() {
      return [
        {
          title: "Completed",
          value: this.completedTodosLength,
          total: this.todos.length,
          chartColor: "#5D5FEF",
        },
        {
          title: "To be finished",
          value: this.openTodosLength,
          total: this.todos.length,
          chartColor: "#EF5DA8",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.todo-footer {
  width: 100%;
  &__no-todo-message {
    display: flex;
    align-items: center;
  }
  &__no-todo-message-text {
    margin-left: 10px;
    color: $color-grey-3;
  }

  &__charts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>