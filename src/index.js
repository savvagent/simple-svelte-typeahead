import App from "./App.svelte";
import { Server } from 'miragejs';

new Server({
  routes() {
    this.namespace = "api";

    this.get("/users/", () => {
      return [
        { name: "Angy", surname: "T." },
        { name: "Chris", surname: "B." },
        { name: "Juliana", surname: "Crain" },
        { name: "Ornery", surname: "Sucker" },
        { name: "Bad", surname: "Ass" },
        { name: "Chicken", surname: "Shit" },
        { name: "Orin", surname: "Hatch" },
        { name: "Mitch", surname: "Romney" },
        { name: "Greg", surname: "Cox" }
      ]
    })
  }
})

const app = new App({
  target: document.body
});

export default app;