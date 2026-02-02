import { Command } from "commander";

export const interceptCommand = new Command("intercept")
  .description("Output environment variables to intercept HTTP traffic")
  .option("-l, --label <label>", "Label for this session")
  .action((options: { label?: string }) => {
    // TODO: Start daemon if needed, register session, output env vars
    const label = options.label ?? "default";
    console.log(`# htpx: intercepting traffic (label: ${label})`);
    console.log("# TODO: Output HTTP_PROXY, HTTPS_PROXY, SSL_CERT_FILE etc.");
  });
