import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
	...defineCloudflareConfig({}),
	// Prevent recursive loop: opennextjs-cloudflare build runs this command
	// instead of default `npm run build` (which would call itself)
	buildCommand: "npx next build",
};
