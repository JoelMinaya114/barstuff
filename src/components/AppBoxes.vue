<template>
  <div id="boxes-container">
    <div
      v-for="(box, index) in filteredBoxes"
      :key="index"
      class="box"
      @click="selectBox(box)">
      {{ box }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedLetter'],
  data() {
    return {
      boxes: [
        { label: 'Adventure', letter: 'A' },
        { label: 'Travel', letter: 'T' },
        { label: 'Car', letter: 'T' },
        { label: 'Beauty', letter: 'T' },
        { label: 'Sport', letter: 'T' },
        { label: 'Zen', letter: 'Z' },
        { label: '', letter: '' },
        { label: 'Leisure', letter: '' },
        { label: 'Music', letter: '' },
        { label: '', letter: '' },
        { label: 'Fitness', letter: '' },
        { label: 'Dining', letter: '' },
      ],
    };
  },
  computed: {
    filteredBoxes() {
      if (this.selectedLetter === 'A') {
        return this.boxes.filter(box => box.letter === 'A');
      } else if (this.selectedLetter === 'T') {
        return this.boxes.filter(box => box.letter === 'T');
      } else if (this.selectedLetter === 'Z') {
        return this.boxes.filter(box => box.letter === 'Z');
      }
      return this.boxes;
    },
  },
  methods: {
    selectBox(box) {
      if (box.label) {
        this.$emit('box-selected', box.label);
      }
    },
  },
};
</script>

<style scoped>
#boxes-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;
  margin: 30px auto;
  gap: 10px;
}
.box {
  width: 100px;
  height: 100px;
  border: 2px solid #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
.box:hover {
  background-color: #007bff;
  color: white;
}
</style>
