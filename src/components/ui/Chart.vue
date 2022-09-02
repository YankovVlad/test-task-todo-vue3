<template>
  <div class="chart">
    <div
      :style="chartStyle"
      class="chart__progress"
    />
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    value: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "red",
    },
  },
  computed: {
    calculatedValue() {
      return (this.value / this.total) * 100;
    },
    chartStyle() {
      return {
        width: `${this.calculatedValue}%`,
        "background-color": this.color,
      };
    },
  },
};
</script>

value/total *100

<style lang="scss">
.chart {
  height: 4px;
  width: 100%;
  border-radius: $br-m;
  background-color: $color-grey-5;

  &__progress {
    height: 4px;
    border-radius: $br-m;
    background-color: red;
    transition: width 0.7s cubic-bezier(0.01, 0.74, 0.56, 1.08);
  }
}
</style>