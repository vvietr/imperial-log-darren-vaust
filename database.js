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

// ----------------------------------------------------------------------------
// DATE FORMATTING GUIDE:
// Format as: "YY.M.DD | ~XXh Local Cycle" 
// Example: "34.4.12 | ~31h Local Cycle"
// 
// YY = Year of the Great ReSynchronization (GRS). Currently Year 34. (2 BBY)
// M  = Month (1-10)
// DD = Day
// ~XXh = The estimated local planetary hour on Felucia.
// ----------------------------------------------------------------------------

const imperialLogs = [
    {
        id: "map_log_1",               // Unique ID. Your audio file MUST be named: map_log_1_audio.mp3
        tab: "logs",                   // Must be 'logs', 'infractions', 'evaluations', or 'commendations'.
        date: "33.4.14 | ~09h",        // Standard GRS Timecycle
        title: "Cartography Sucks",
        personnel: "",                 // Leave blank to auto-display "N/A"
        author: "",                    // For 'logs', blank auto-defaults to GC-3170
        terminal: "Tablet",            // Seeded generator uses this to assign the specific terminal. Must be 'Command', 'Tablet', 'Barracks', or 'Field'.
        imageExt: "jpg",               // You mentioned the map is a JPG. Upload it as: map_log_1_img.jpg
        body: `Based on helmet-recorded media and available imagery - along with word of mouth from the scouts and our more experienced troopers - I've compiled a crude overlay with a relatively recent orbital scan to create a map of the region surrounding the main base here on Felucia. My cartography skills are... limited, I'll admit that, but it should at least be better than "o' yea I've got it right 'er in me noggin!" from whomever we choose to lead an expedition.

There are some interesting conclusions supported by this map, though: Drills 1 and 2 are most definitely the easiest to maintain. Drills 3 and 4, however, are quite entrenched in the forestry and, unfortunately, very near to known nesting locations for aggressive fauna. Oh well, I don't suppose there's much you can do but rely on the aim of your average trooper being true.`
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
