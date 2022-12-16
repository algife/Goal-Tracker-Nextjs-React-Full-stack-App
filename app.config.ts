import AppConfig from "./models/app-config";

const authorLinkedIn: string = "https://linkedin.com/in/algife";
const isProd: boolean = process.env.NODE_ENV === "production";
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const hostUrl: string | undefined = process.env.NEXT_PUBLIC_HOST;

// -----

const appConfig: AppConfig = {
  hostUrl,
  API_URL: `${hostUrl}/api`,
  port,
  isProd,
  userId: 123, // Logged User Id
  userName: "John Doe",
  authorName: "Alexandre",
  authorFullName: "Alexandre Gimenez",
  authorJobRole: "Full-Stack Developer for modern Web & Mobile Apps",
  authorLinkedIn,
  keyRefs: {
    LOCAL_STORAGE_DATA: "GOAL_TRACKER_DATA",
  },
  navLinks: [
    {
      text: "About",
      href: "/About",
      isExternal: false,
    },
    {
      text: "Goals",
      href: "/goals",
      isExternal: false,
    },
    {
      text: "Goal #1",
      href: "/goals/1",
      isExternal: false,
    },
    {
      text: "My LinkedIn",
      href: authorLinkedIn,
      isExternal: true,
    },
  ],
};

// ------

const unspecifiedEnvVars: string[] = Object.keys(appConfig).filter(
  (k) => (appConfig as any)[k] == null
);
if (unspecifiedEnvVars.length > 0)
  throw new Error(
    `Some Env. Vars. are not specified for the configuration keys: ${unspecifiedEnvVars.join(
      ", "
    )}`
  );

// ------

export default appConfig;
