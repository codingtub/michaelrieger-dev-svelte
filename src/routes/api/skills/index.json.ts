import type { SapperRequest, SapperResponse } from "@sapper/server";
import { skills } from "./_skills";

export async function get(
  req: SapperRequest,
  res: SapperResponse,
  next: () => void
) {
  if (!skills.length) {
    next();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(skills));
  }
}
