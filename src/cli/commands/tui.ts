import { Command } from "commander";

export const tuiCommand = new Command("tui")
  .description("Browse captured HTTP traffic")
  .option("-l, --label <label>", "Filter by session label")
  .action((options: { label?: string }) => {
    // TODO: Launch ink TUI
    console.log("TODO: Launch TUI");
    if (options.label) {
      console.log(`Filtering by label: ${options.label}`);
    }
  });
