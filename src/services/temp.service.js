import { tempResponseDTO } from "../dtos/temp.response.dto.js";
import { flagResponseDTO } from "../dtos/temp.response.dto.js";
import {
  missionFinsiehdDTO,
  missionPendingDTO,
} from "../dtos/temp.response.dto.js";
import { BaseError } from "../config/error.js";
import { status } from "../config/response.status.js";
export const getTempData = () => {
  return tempResponseDTO("This is TEST! >.0");
};

export function CheckFlag(flag) {
  if (flag == 1) throw new BaseError(status.BAD_REQUEST); // 에러 발생시키기!
  else {
    return flagResponseDTO(flag);
  }
}

export function CheckMissionData(missionStatus) {
  if (missionStatus == "finished")
    return missionFinsiehdDTO(missionStatus);
  else if (missionStatus == "pending") {
    return missionPendingDTO(missionStatus);
  } else {
    throw new BaseError(status.MISSION_NOT_FOUND); // 에러 발생시키기!
  }
}