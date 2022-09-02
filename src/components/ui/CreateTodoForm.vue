<template>
  <div class="form">
    <input
      type="text"
      placeholder="Add new todo..."
      class="form__input"
      v-model="name"
      @keyup.enter="add"
    >
    <Transition>
      <Button
        v-if="!isDisabled"
        label="Submit"
        @click="add"
      />
    </Transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Button from "./Button.vue";
export default {
  name: "CreateTodoForm",
  components: {
    Button,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    isDisabled() {
      return !this.name.trim().length;
    },
  },
  methods: {
    ...mapActions(["addTodo"]),
    add() {
      this.addTodo({
        id: Date.now(),
        name: this.name,
        completed: false,
      });
      this.name = "";
    },
  },
};
</script>
<style lang="scss">
.form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: 410px;

  &__input {
    width: 100%;
    max-width: 310px;
    height: 40px;
    padding: 12px;
    border: 1px solid $color-grey-2;
    border-radius: $br-m;
    @include fontSize("s");
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $color-grey-3;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>