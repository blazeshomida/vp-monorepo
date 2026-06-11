import "#/styles.css";
import { createGreeting } from "@scope/library";

const app = document.querySelector("#app");

if (app === null) {
  throw new Error("Expected #app element to exist.");
}

app.textContent = createGreeting({ name: "Playground" });
