import { site } from "@/lib/site"

/** Personal Agent Protocol draft 0.1. Discovery-only: browse signed out. */
export function GET() {
  return Response.json({
    protocol_version: "0.1",
    organization: { name: site.name, domain: site.host },
    web: {},
  })
}
