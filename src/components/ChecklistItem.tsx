import { LabelHTMLAttributes } from "react";
import Checkbox from "./Checkbox";

export type ChecklistItemProps = LabelHTMLAttributes<{}> & {
  label: string;
};

export default function ChecklistItem(props: ChecklistItemProps) {
  return (
    <label className="flex justify-between p-[8px_22px]" {...props}>
      {props.label}

      <Checkbox />
    </label>
  );
}
