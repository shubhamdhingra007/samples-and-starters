import fs from "fs";

export function copyPackageJson() {
    try {
        const dir = "dist";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {
                recursive: true
            });
        }
        fs.copyFileSync("package.json", "dist/package.json");
        console.log("package.json was copied to destination dist");
    } catch (error) {
        console.error("Error copying >>", error);
    }
}