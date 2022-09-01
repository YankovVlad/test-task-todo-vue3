<template>
  <button class="button">
    {{label}}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.button {
  height: 40px;
  width: max-content;
  padding: 12px 16px;
  border: none;
  border-radius: $br-m;
  color: $color-grey-0;
  @include fontSize("xs");
  font-weight: 600;
  background-color: $color-primary-blue-0;
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:not(.button:disabled):hover {
    background-color: $color-primary-blue-1;
  }
  &:disabled {
    opacity: 0.5;
  }
}
</style>