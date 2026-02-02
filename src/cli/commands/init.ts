import { Command } from "commander";

export const initCommand = new Command("init")
  .description("Output shell function for .zshrc/.bashrc (one-time setup)")
  .action(() => {
    // TODO: Output shell function that wraps htpx intercept
    console.log("# Add this to your .zshrc or .bashrc:");
    console.log('# eval "$(htpx init)"');
    console.log("");
    console.log("htpx() {");
    console.log('  if [[ "$1" == "intercept" ]]; then');
    console.log("    shift");
    console.log('    eval "$(command htpx intercept "$@")"');
    console.log("  else");
    console.log('    command htpx "$@"');
    console.log("  fi");
    console.log("}");
  });
