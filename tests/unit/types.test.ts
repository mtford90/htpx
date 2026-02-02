import { describe, it, expect } from "vitest";
import type { CapturedRequest, DaemonStatus } from "../../src/shared/types.js";

describe("types", () => {
  it("CapturedRequest has required fields", () => {
    const request: CapturedRequest = {
      id: "123",
      sessionId: "session-1",
      timestamp: Date.now(),
      method: "GET",
      url: "https://example.com/api",
      host: "example.com",
      path: "/api",
      requestHeaders: { "Content-Type": "application/json" },
    };

    expect(request.id).toBe("123");
    expect(request.method).toBe("GET");
  });

  it("DaemonStatus has required fields", () => {
    const status: DaemonStatus = {
      running: true,
      proxyPort: 8080,
      sessionCount: 2,
      requestCount: 100,
    };

    expect(status.running).toBe(true);
    expect(status.proxyPort).toBe(8080);
  });
});
