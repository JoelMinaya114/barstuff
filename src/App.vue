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
    this.socket.onerror = (error) => {
      console.error("WebSocket error observed:", error);
      // Handle the error appropriately, e.g., retry connection, show a message, etc.
    };

    this.socket.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
      // Optionally, you can attempt to reconnect or notify the user
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
