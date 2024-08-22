import { useLocation } from "react-router-dom";
import Orphans from "./screens/orphans/Orphans";
import Widows from "./screens/widows/Widows";

export default function ProgramDirectory() {
  const { pathname } = useLocation();

  const screens = {
    orphans: Orphans,
    "widow-support-program": Widows,
  };
  const ScreenToRender = screens[pathname.split("/").pop()];
  if (!ScreenToRender === null) {
    return;
  }
  return (
    <div>
      <ScreenToRender />
    </div>
  );
}
