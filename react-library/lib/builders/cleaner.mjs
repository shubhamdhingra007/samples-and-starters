import fs from "fs";

export function cleanDist() {
    try {
        if (fs.existsSync("dist")) {
            fs.rmSync("dist", { force: true, recursive: true });
            console.log("Deleted dist folder successfully.");
        }
    } catch (error) {
        console.error("Error deleting dist folder >", error);
    }
}