import type { NextRequest } from "next/server";

// --------------------------------

export default function middleware(req: NextRequest) {
  // redirectHomeRouteToGoals(req);
}

// -----

// ! @deprecated since v.0.0.4
// // /**
// //  * Redirect the home url to /goals
// //  * */
// // function redirectHomeRouteToGoals(req: NextRequest) {
// //   const url = req.nextUrl.clone();
// //   if (url.pathname === "/") {
// //     url.pathname = "/goals"; // only absolute paths are accepted
// //     return NextResponse.redirect(url);
// //   }
// // }
