import { useLocation } from "react-router-dom";
import Gallery from "./screens/gallery/Gallery";
import Reports from "./screens/reports/Reports";
import Photos from "./screens/gallery/photos/Photos";
import Videos from "./screens/gallery/videos/Videos";
import "./CurrentAffairs.css";

export default function CurrentAffairs() {
  const { pathname } = useLocation();

  const screens = {
    gallery: Gallery,
    reports: Reports,
    photos: Photos,
    videos: Videos,
  };

  // Split the path into segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Determine which screen to render
  let ScreenToRender = null;

  if (pathSegments.includes("gallery")) {
    const lastSegment = pathSegments[pathSegments.length - 1];

    // Check if the last segment is "photos" or "videos"
    if (lastSegment === "photos" || lastSegment === "videos") {
      ScreenToRender = screens[lastSegment];
    } else {
      // If no specific gallery type, render the Gallery screen
      ScreenToRender = screens.gallery;
    }
  } else if (pathSegments.includes("reports")) {
    // If the path contains "reports", render the Reports screen
    ScreenToRender = screens.reports;
  }

  // If no valid screen to render, return null
  if (!ScreenToRender) {
    return null;
  }

  return (
    <div className="current-affairs">
      <ScreenToRender />
    </div>
  );
}
