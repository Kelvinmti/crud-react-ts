import { ChangeHandlerParam } from "../../types";

export interface InputProps {
  type: string;
  label: string;
  changeHandler: (hEvent: ChangeHandlerParam) => void;
}
