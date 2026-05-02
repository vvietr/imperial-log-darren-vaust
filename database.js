// ============================================================================
// IMPERIAL DUSK NETWORK - GC-3170 DATABASE LEDGER
// ============================================================================
// INSTRUCTIONS FOR NEW ENTRIES:
// 1. Copy the blank template below and paste it above the closing `];` bracket.
// 2. 'tab': Must be 'logs', 'infractions', 'evaluations', or 'commendations'.
// 3. 'terminal': Must be 'Command', 'Tablet', 'Barracks', or 'Field'.
// 4. 'imageExt': Leave blank ("") if no image. Type "jpg" or "png" if you have one.
//    Make sure your uploaded image is named exactly: [id]_img.jpg
// 5. Audio: The system will automatically look for: [id]_audio.mp3
// ============================================================================

const imperialLogs = [
    {
        id: "map_log_1",               // Unique ID. Your audio file MUST be named: map_log_1_audio.mp3
        tab: "logs",                   
        date: "34.4.14 | ~09h",        // Standard GRS Timecycle
        title: "Sector Cartography Updates",
        personnel: "",                 // Leave blank to auto-display "N/A"
        author: "",                    // For 'logs', blank auto-defaults to GC-3170
        terminal: "Tablet",            // Seeded generator uses this to assign the specific terminal
        imageExt: "jpg",               // You mentioned the map is a JPG. Upload it as: map_log_1_img.jpg
        body: `I've finished compiling the telemetry data from yesterday's patrol into a cohesive local grid map. The geography shifts too fast for standard imperial cartography, so this localized map of OP-2 and the surrounding sectors will have to suffice.
        
        Drill 3 and 4's piping looks particularly vulnerable based on the latest spore-storm erosion. I've marked the primary and alternate routes, but we need to stay vigilant.`
    }

    // --- COPY AND PASTE THIS BLANK TEMPLATE FOR NEW ENTRIES ---
    /*
    ,{
        id: "unique_name_here",
        tab: "logs",
        date: "YY.M.DD | ~00h",
        title: "Title Here",
        personnel: "",
        author: "",
        terminal: "Field",
        imageExt: "",
        body: `Your text goes here. 
        
        Use the enter key twice to make a new paragraph.`
    }
    */
];
