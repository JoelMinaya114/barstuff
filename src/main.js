import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Initialize WebSocket
const socket = new WebSocket('wss://example.com/socket');

// Add socket to global properties
app.config.globalProperties.$socket = socket;

app.mount('#app');

export default {
    mounted() {
      // Access WebSocket from any component
      this.$socket.onopen = () => {
        console.log("WebSocket connection established");
      };
    },
  };
  