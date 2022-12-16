import moment from "moment";

// ---------------------------------

export default abstract class DatesService {
  static getDeadlineDaysLeft = (deadline: string): number => {
    const date = moment(deadline).endOf("day"),
      diff = date.diff(moment().startOf("day"), "days");
    return diff;
  };
}
