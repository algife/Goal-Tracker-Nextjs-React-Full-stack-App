import type { NextRequest } from "next/server";

// --------------------------------

export default function middleware(req: NextRequest) {
  redirectHomeRouteToGoals(req);
}

// -----

/**
 * Redirect the home url to /goals
 * */
function redirectHomeRouteToGoals(req: NextRequest) {
  // ! UNCOMMENT IF NEEDED
  // const url = req.nextUrl.clone();
  // if (url.pathname === "/") {
  //   url.pathname = "/goals"; // only absolute paths are accepted
  //   return NextResponse.redirect(url);
  // }
}
