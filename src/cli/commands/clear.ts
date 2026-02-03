import { Command } from "commander";
import { findProjectRoot, getHtpxPaths } from "../../shared/project.js";
import { isDaemonRunning } from "../../shared/daemon.js";
import { ControlClient } from "../../daemon/control.js";

export const clearCommand = new Command("clear")
  .description("Clear all captured requests")
  .action(async () => {
    const projectRoot = findProjectRoot();
    if (!projectRoot) {
      console.log("Not in a project directory (no .htpx or .git found)");
      process.exit(1);
    }

    const paths = getHtpxPaths(projectRoot);

    const running = await isDaemonRunning(projectRoot);
    if (!running) {
      console.log("Daemon is not running");
      process.exit(1);
    }

    try {
      const client = new ControlClient(paths.controlSocketFile);
      await client.clearRequests();
      console.log("Requests cleared");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error(`Error clearing requests: ${message}`);
      process.exit(1);
    }
  });
