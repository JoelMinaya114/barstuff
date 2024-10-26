<template>
  <div id="slider-container">
    <input type="range" min="0" max="2" v-model="sliderValue" @input="onSliderChange" />
    <div id="letters">
      <span class="letter" :class="{ active: sliderValue === 0 }">A</span>
      <span class="letter" :class="{ active: sliderValue === 1 }">T</span>
      <span class="letter" :class="{ active: sliderValue === 2 }">Z</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
    onSliderChange() {
      const letters = ['A', 'T', 'Z'];
      const selectedLetter = letters[this.sliderValue];
      this.$emit('slider-change', selectedLetter);
    },
  },
};
</script>

<style scoped>
#slider-container {
  position: relative;
  width: 80%;
  margin: 50px auto;
}
#letters {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 10px;
}
.letter {
  position: relative;
  transform: translateY(10px);
  font-size: 1.5em;
  color: #333;
}
.letter.active {
  font-weight: bold;
  color: #007bff;
}
</style>
