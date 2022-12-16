import appConfig from "../app.config";
import { LocalStorageData } from "../models";

// ---------------------------------

export default abstract class LocalStorageService {
  static create = (): LocalStorageData => {
    return { goals: [] };
  };

  static getLocalStorageData = (): LocalStorageData | null => {
    const lsDataRaw: string =
      (typeof window !== "undefined" &&
        localStorage.getItem(appConfig.keyRefs.LOCAL_STORAGE_DATA)) ||
      "";
    const localData: LocalStorageData | null = lsDataRaw
      ? JSON.parse(lsDataRaw)
      : undefined;
    return localData;
  };

  static setLocalStorageData = (key: string, newData: any): void => {
    const current: LocalStorageData | null =
      LocalStorageService.getLocalStorageData() || null;

    const newState: LocalStorageData = {
      ...(current ?? LocalStorageService.create()),
      [key]: newData,
    };
    if (typeof window !== "undefined")
      localStorage.setItem(
        appConfig.keyRefs.LOCAL_STORAGE_DATA,
        JSON.stringify(newState)
      );
  };

  static deleteLocalStorageData = (): void => {
    if (typeof window !== "undefined")
      localStorage.removeItem(appConfig.keyRefs.LOCAL_STORAGE_DATA);
  };

  static resetLocalStorageData = (key: string): void => {
    if (typeof window !== "undefined")
      localStorage.setItem(
        appConfig.keyRefs.LOCAL_STORAGE_DATA,
        JSON.stringify(LocalStorageService.create())
      );
  };
}
