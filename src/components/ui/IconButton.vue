<template>
  <button class="icon-button">
    <component :is="iconSelector(icon)" />
  </button>

</template>

<script>
import IconTrash from "../icons/IconTrash.vue";
import IconPencil from "../icons/IconPencil.vue";
import IconDone from "../icons/IconDone.vue";
import IconCancel from "../icons/IconCancel.vue";
export default {
  name: "IconButton",
  components: {
    IconTrash,
    IconPencil,
    IconDone,
    IconCancel,
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconSelector() {
      return (icon) => {
        switch (icon) {
          case "trash":
            return "IconTrash";
          case "pencil":
            return "IconPencil";
          case "done":
            return "IconDone";
          case "cancel":
            return "IconCancel";
          default:
            return "";
        }
      };
    },
  },
};
</script>

<style lang="scss">
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: $br-s;
  transition: filter 0.2s ease;
  background: transparent;
  transition: background-color 0.2s ease;
  &:not(.icon-button:disabled):hover {
    background-color: $color-grey-1;
  }
  &:disabled svg {
    filter: brightness(0.6);
  }
}
</style>