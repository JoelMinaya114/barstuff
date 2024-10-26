<template>
  <div id="app">
    <!-- Your app content -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      socket: null,
    };
  },
  created() {
    // Initialize WebSocket
    this.socket = new WebSocket('wss://example.com/socket');
    this.socket.onopen = () => {
      console.log("WebSocket connection established");
    };
  },
};
</script>


<style>
#selected-title {
  margin-top: 20px;
  font-size: 2em;
  text-align: center;
}
</style>
