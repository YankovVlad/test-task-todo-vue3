<template>
  <div class="chart-card">
    <span class="chart-card__todos-count">{{ count }} tasks</span>
    <p class="chart-card__title"> {{ title }}</p>
    <Chart
      :total="total"
      :value="count"
      :color="chartColor"
    />
  </div>
</template>

<script>
import Chart from "./Chart.vue";
export default {
  name: "ChartCard",
  components: {
    Chart,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    count: {
      type: [Number, String],
      default: 0,
    },
    total: {
      type: [Number, String],
      default: 10,
    },
    chartColor: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.chart-card {
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 16px;
  border-radius: $br-m;
  background-color: $color-grey-1;

  &__todos-count {
    margin-bottom: 4px;
    @include fontSize("xxs");
    font-weight: 600;
    color: $color-grey-4;
    opacity: 0.5;
  }
  &__title {
    margin-bottom: 12px;
    @include fontSize("s");
    font-weight: 700;
  }
}
</style>