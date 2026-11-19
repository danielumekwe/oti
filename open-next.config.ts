import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

const config = defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
	enableCacheInterception: true,
});

// `npm run build` runs the OpenNext build, so OpenNext must call Next directly to avoid recursion.
export default { ...config, buildCommand: "npx next build" };
