import drawingRoom from "./drawing-room.json";
import bedRoom from "./bed-room.json";
import bathRoom from "./bath-room.json";
import dinningSpace from "./dinning-space.json";
import kitchenRoom from "./kitchen-room.json";
import readingRoom from "./reading-room.json";
import services from "./services.json";

// All project data keyed by their slug for O(1) lookup
const allProjects: Record<string, (typeof drawingRoom)[0]> = {
  "drawing-room": drawingRoom[0],
  "bed-room": bedRoom[0],
  "bath-room": bathRoom[0],
  "dinning-space": dinningSpace[0],
  "kitchen-room": kitchenRoom[0],
  "office-area": readingRoom[0],
};

const allServices: Record<string, (typeof services)[0]> = {
  "office-area": services[0],
  "3d-wall-design": services[1],
  "custom-furniture": services[2],
  "lighting-design": services[3],
  "wall-covering": services[4],
  "residential-design": services[5],
  "corporate-design": services[6],
  "industrial-design": services[7],
};

export { allProjects, allServices };
