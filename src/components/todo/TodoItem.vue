<template>
  <li class="todo-item">
    <div class="todo-item__actions gap-m">
      <IconDrag class="todo-item__drag-icon" />
      <input
        v-if="!isEdit"
        type="checkbox"
        :checked="todo.completed"
        class="todo-item__checkbox"
        @change="changeTodoStatus"
      />
    </div>

    <div
      v-if="isEdit"
      class="todo-item__editable-name"
    >
      <input
        type="text"
        class="todo-item__editable-field"
        v-model="name"
      />
      <div class="todo-item__editable-btns">
        <IconButton
          icon="done"
          @click="edit"
        />
        <IconButton
          icon="cancel"
          @click="setEditState(false)"
        />
      </div>

    </div>
    <span
      v-else
      :class="nameClasslist"
    >{{ todo.name }}</span>
    <div
      v-if="!isEdit"
      class="todo-item__actions gap-s"
    >
      <IconButton
        icon="pencil"
        @click="setEditState(true)"
      />
      <IconButton
        icon="trash"
        @click="removeTodo(todo.id)"
      />
    </div>

  </li>
</template>

<script>
import IconDrag from "../icons/IconDrag.vue";
import IconButton from "../ui/IconButton.vue";
import { mapActions } from "vuex";
import TodoModel from "../../models/todoModel.js";
export default {
  name: "TodoItem",
  components: {
    IconDrag,
    IconButton,
  },
  data() {
    return {
      isEdit: false,
      name: "",
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    nameClasslist() {
      return [
        "todo-item__name",
        {
          "todo-item__name-completed": this.todo.completed,
        },
      ];
    },
  },
  mounted() {
    this.name = this.todo.name;
  },
  methods: {
    ...mapActions(["deleteTodo", "editTodo"]),
    removeTodo(id) {
      this.deleteTodo(id);
    },
    setEditState(value) {
      this.isEdit = value;
    },
    edit() {
      this.editTodo(
        new TodoModel({
          id: this.todo.id,
          name: this.name,
          completed: this.todo.completed,
        })
      );
      this.isEdit = false;
    },
    changeTodoStatus(e) {
      this.todo.completed = e.target.checked;
      this.editTodo(
        new TodoModel({
          id: this.todo.id,
          name: this.name,
          completed: e.target.checked,
        })
      );
    },
  },
};
</script>

<style lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 420px;

  &__actions {
    display: flex;
    align-items: center;
  }
  &__drag-icon {
    &:hover {
      cursor: pointer;
    }
  }
  &__name {
    flex: 1 0 30%;
    padding: 0 10px;
    @include fontSize("m");
    font-weight: 500;
    transition: opacity 0.2s ease;
  }
  &__name-completed {
    opacity: 50%;
  }
  &__editable-name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1 0 30%;
  }
  &__editable-btns {
    display: flex;
    align-items: center;
  }
  &__editable-field {
    height: 26px;
    padding: 0 10px;
    border: 1px solid $color-grey-2;
    border-radius: $br-s;
    margin-left: 25px;
    font-size: 17px;

    &:focus {
      outline: none;
    }
  }
}
.gap-m {
  gap: 12px;
}
.gap-s {
  gap: 4px;
}
</style>