import { Command } from "commander";

export const stopCommand = new Command("stop").description("Stop the daemon").action(() => {
  // TODO: Send stop signal to daemon via Unix socket
  console.log("TODO: Stop daemon");
});
