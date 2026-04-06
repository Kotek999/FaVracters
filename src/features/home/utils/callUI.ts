import { activityConfig } from "./activityConfig";
import { Activity } from "@/features/user/types";

export function callUI<T extends Activity>(activity: T) {
  const ui = activityConfig[activity.type] as {
    title: (p: T) => string;
    description: (p: T) => string;
    backgroundColor: string;
    icon: (p: T) => React.JSX.Element;
  };

  return {
    title: ui.title(activity),
    description: ui.description(activity),
    backgroundColor: ui.backgroundColor,
    icon: ui.icon(activity),
  };
}
