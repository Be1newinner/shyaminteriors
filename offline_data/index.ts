import drawingRoom from "./drawing-room.json";
import bedRoom from "./bed-room.json";
import bathRoom from "./bath-room.json";
import dinningSpace from "./dinning-space.json";
import kitchenRoom from "./kitchen-room.json";
import readingRoom from "./reading-room.json";

// All project data keyed by their slug for O(1) lookup
const allProjects: Record<string, typeof drawingRoom[0]> = {
    "drawing-room": drawingRoom[0],
    "bed-room": bedRoom[0],
    "bath-room": bathRoom[0],
    "dinning-space": dinningSpace[0],
    "kitchen-room": kitchenRoom[0],
    "reading-room": readingRoom[0],
};

export default allProjects;
