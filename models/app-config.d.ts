import { NavLink } from "./nav-link";

// --------------------

export default interface AppConfig {
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
