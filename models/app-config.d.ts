import NavLink from "../models/nav-link";

// --------------------

export default interface AppConfig {
  hostUrl: string | undefined;
  API_URL: string;
  port: number;
  isProd: boolean;
  userId: number;
  userName: string;
  authorName: string;
  authorFullName: string;
  authorJobRole: string;
  authorLinkedIn: string;
  keyRefs: {
    [key: string]: string;
  };
  navLinks: NavLink[];
}
