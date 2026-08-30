const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\s*\{\/\* --- CINEMATIC AI VIDEO SECTION --- \*\/\}[\s\S]*?<\/motion\.div>/;

if (code.match(regex)) {
    code = code.replace(regex, '');
    fs.writeFileSync('src/app/page.tsx', code, 'utf8');
    console.log("Successfully removed the video section.");
} else {
    console.log("Regex didn't match.");
}
