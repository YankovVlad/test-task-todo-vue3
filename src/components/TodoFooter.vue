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
      <span
        class="todo-footer__sort-item"
        @click="setEachState(true)"
      >Check all</span>
      <span
        v-for="sortItem in sortItems"
        :key="sortItem.name"
        :class='sortItemClasslist(sortItem.isActive)'
        @click="changeSorting(sortItem.name)"
      >{{sortItem.name}}</span>
      <span
        class="todo-footer__sort-item"
        @click="setEachState(false)"
      >Clear complited</span>

    </div>

  </div>
</template>

<script>
import ChartCard from "./ui/ChartCard.vue";
import IconCheck from "./icons/IconCheck.vue";
import { mapActions } from "vuex";
import TodoModel from "../models/todoModel.js";
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
    currentSortingOption: {
      type: String,
      default: "All",
    },
  },
  data() {
    return {
      sortItems: [
        {
          name: "All",
          isActive: true,
        },
        {
          name: "Active",
          isActive: false,
        },
        {
          name: "Completed",
          isActive: false,
        },
      ],
    };
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
    sortItemClasslist() {
      return (status) => {
        return [
          "todo-footer__sort-item",
          {
            "todo-footer__sort-item-active": status,
          },
        ];
      };
    },
  },
  mounted() {
    this.changeSortingOption(this.currentSortingOption);
  },
  methods: {
    ...mapActions(["setTodos"]),
    setEachState(value) {
      this.setTodos(
        this.todos.map((todo) => {
          return new TodoModel({
            id: todo.id,
            name: todo.name,
            completed: value,
          });
        })
      );
    },
    changeSorting(value) {
      this.$emit("sortingChanged", value);
      this.changeSortingOption(value);
    },
    changeSortingOption(option) {
      this.sortItems = this.sortItems.map((item) => {
        return {
          name: item.name,
          isActive: false,
        };
      });
      const targetIndex = this.sortItems.indexOf(
        this.sortItems.find((item) => item.name === option)
      );
      const mapedSortItems = [...this.sortItems];
      mapedSortItems.splice(targetIndex, 1, { name: option, isActive: true });
      this.sortItems = mapedSortItems;
    },
  },
};
</script>

<style lang="scss">
.todo-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
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
    max-width: 380px;
    margin-bottom: 10px;
  }
  &__sorting {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    @include mobile {
      justify-content: center;
    }
  }

  &__sort-item {
    padding: 8px 12px;
    @include fontSize("xs");
    font-weight: 600;
    border-radius: $br-m;
    transition: background-color 0.2s ease, transform 0.2s ease;
    &:hover {
      cursor: pointer;
      background-color: $color-grey-1;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  &__sort-item-active {
    color: $color-grey-0;
    background-color: $color-primary-blue-0;
    border-radius: $br-m;
    transition: background-color 0.2s ease;
    &:hover {
      cursor: pointer;
      background-color: $color-primary-blue-1;
    }
  }
}
</style>