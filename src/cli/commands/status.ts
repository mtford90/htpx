import { Command } from "commander";

export const statusCommand = new Command("status").description("Show daemon status").action(() => {
  // TODO: Query daemon via Unix socket
  console.log("TODO: Show daemon status");
});
