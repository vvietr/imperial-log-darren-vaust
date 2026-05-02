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
// COMMLINK DATABASE IS AT THE BOTOOOOOOOOOOOOOOOM
const imperialLogs = [
    {
        id: "map_log_1",               // Unique ID. Your audio file MUST be named: map_log_1_audio.mp3
        tab: "logs",                   // Must be 'logs', 'infractions', 'evaluations', or 'commendations'.
        date: "33.4.14 | ~09h",        // Standard GRS Timecycle
        title: "Cartography Sucks",
        personnel: "",                 // Leave blank to auto-display "N/A"
        author: "",                    // For 'logs', blank auto-defaults to GC-3170
        terminal: "Command",            // Seeded generator uses this to assign the specific terminal. Must be 'Command', 'Tablet', 'Barracks', or 'Field'.
        imageExt: "jpg",               // You mentioned the map is a JPG. Upload it as: map_log_1_img.jpg
        body: `Based on helmet-recorded media and available imagery - along with word of mouth from the scouts and our more experienced troopers - I've compiled a crude overlay with a relatively recent orbital scan to create a map of the region surrounding the main base here on Felucia. My cartography skills are... limited, I'll admit that, but it should at least be better than "o' yea I've got it right 'er in me noggin!" from whomever we choose to lead an expedition.

There are some interesting conclusions supported by this map, though: Drills 1 and 2 are most definitely the easiest to maintain. Drills 3 and 4, however, are quite entrenched in the forestry and, unfortunately, very near to known nesting locations for aggressive fauna. Oh well, I don't suppose there's much you can do but rely on the aim of your average trooper being true.`
    },

    {
        id: "bff_1",
        tab: "logs",
        date: "33.2.01 | ~07h",
        title: "A Friendly Face In A Chaos Waste",
        personnel: "SP-6167",
        author: "",
        terminal: "Barracks",
        imageExt: "jpg",
        body: `I haven't been here too long, but I've already been lucky enough to find a friendly face among the troopers - A sapper by the designation of 6170. We met back before I was hypershipped off to Lothal, in recruit processing. I didn't know much of him then... and I don't suppose I know much of him now, come to think of it. I ought to get to know him better - the more friends the merrier in a void-hell like this one.

Seriously... in all its wisdom, the Imperial engineers couldn't come up with a series of pumps and pipes to put water in our purifiers? We've got fucking moisture vaporators for Marka's-sake! I'd expect to see those -maybe- as a backup, in the direst sense of the word, for a desert-based facility... but in a swamp? A region that is, by definition, saturated with water!

Does a promotion to Imperial Engineering Officer come with a complimentary fucking cranial excavation or something?`
    },
    
    {
    id: "report_1",
    tab: "evaluations",
    date: "33.4.08 | ~20h",
    title: "Performance Report",
    personnel: "GC-3170",
    author: "SP-6167",
    terminal: "Barracks",
    imageExt: "jpg",
    body: `GC-3170 demonstrated relative dependability, despite prior misgivings of technical equipment present. 
Technician conducted adequate diagnoses of damaged systems. 
Technician dispatched himself with his knowhow intact in order to retrieve the equipment and return alive to the damaged infrastructure site. 
Technician did not bring the correct materials for repair in the first place. 
Moronic.`
    },
    // --- COPY AND PASTE THIS BLANK TEMPLATE FOR NEW ENTRIES ---
    /*
    {
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
    },
    */
];

// ==========================================
// GARRISON COMM-LINK DATABASE
// ==========================================
// ENGINE RULES:
// 1. STATUS REPORTS (50%): Stitches [Name] + [Sector] + [Issue].
//    - Sectors: Capitalize the subject (e.g., "Reactor B").
//    - Issues: Start lowercase, end with punctuation (e.g., "needs repair.").
//    - Outputs -> "[TK-882]: Reactor B needs repair."
//
// 2. CASUAL CHATTER (50%): Stitches [Name] + [Casual].
//    - Casual: Full, capitalized sentences. Add "Negative" or "Copy" to fake replies.
//    - Outputs -> "[LT. VANE]: Copy that."
//
// 3. CUSTOM OVERRIDE: Every 10th message ignores the randomizer and plays 
//    an exact object from 'customMessages'. Use for lore or direct orders.
// ==========================================
//{ user: "", body: "" },
const chatDatabase = {
    names: ["TK-882", "GC-119", "SGT. KALLUS", "TECH-4", "RN-33", "BASE-CMD", "DX-DROID", "MAINT-LEAD", "GC-3170", "LT. VANE", "TK-8821", "TK-4211", "TK-1138", "TK-9091", "TK-5562", "TK-7741", "TK-3312", "TK-8144", "TK-2187", "TK-6651", "TK-4921", "TK-8819", "TK-1044", "TK-7332", "TK-5114", "GC-3170", "GC-8192", "GC-4451", "GC-9912", "GC-5531", "GC-7714", "GC-2291", "GC-8843", "GC-1104", "GC-3991", "GC-6112", "GC-4041", "GC-7881", "SP-8812", "SP-4190", "SP-2214", "SP-9981", "SP-5512", "SP-7124", "SP-1144", "SP-3392", "SP-8113", "SP-6621", "TP-3311", "TP-6641", "TP-8123", "TP-1142", "TP-9915", "TP-4418", "TP-7721", "TP-5519", "FT-4412", "FT-8814", "FT-2291", "FT-7713", "FT-5151", "FT-9911", "FT-3324", "FT-6118", "SGC-1124", "SGC-8841", "SGC-3319", "SGC-5511", "SGC-7721", "SGC-9914", "SGC-4412", "SGT. RENN", "SGT. VEX", "SGT. KALLUS", "SGT. DORN", "SGT. TARN", "SGT. VANE", "SGT. BRANT", "SGT. TYREE", "SGT. 8112", "SGT. 4419", "SGT. 7113", "IG-11", "IG-88", "IG-86", "IG-90", "IG-72", "IG-44", "IG-12", "BMD-7", "BMD-12", "BMD-1", "BMD-44", "BMD-9", "BMD-3", "BMD-81", "MD-5", "MD-1", "MD-9", "MD-2", "MD-11", "MD-77"],
    sectors: ["Sector 4", "Perimeter Alpha", "Drill Site", "Reactor B", "Spore Filter 2", "Mess Hall", "Hangar Bay", "Barracks", "Comms Relay", "Sector 4", "Sector 7G", "Sector 2", "Perimeter Alpha", "Perimeter Cresh", "Perimeter Aurek", "Drill Site 1", "Drill Site 2", "Drill Site 4", "Reactor Core", "Secondary Reactor", "Spore Filter 1", "Spore Filter 2", "Spore Filter 4", "Mess Hall", "Main Hangar", "Hangar Bay 32", "Hangar Bay 7", "Barracks Block A", "Barracks Block C", "Officer Quarters", "Comms Relay", "Primary Uplink", "Shield Generator", "Detention Block", "Armory", "Vehicle Bay", "AT-ST Walker Pen", "Command Center", "Medical Bay", "Supply Depot", "East Watchtower", "North Ridge Post", "Jungle Patrol Route", "Landing Pad Aurek", "Landing Pad Besh", "Coolant Tower", "Turbolift Shaft 4", "Turbolift Shaft 1", "Outer Perimeter", "Scrap Yard", "Droid Maintenance"],
    issues: ["reading power drop.", "cleared of wildlife.", "jammed again.", "reporting nominal.", "requesting tech support.", "door mechanism stuck.", "looks quiet.", "reading a massive power drop.", "cleared of local wildlife.", "jammed again.", "reporting nominal.", "requesting tech support.", "door mechanism stuck.", "looks quiet.", "smells like ozone.", "is flooded with spore buildup.", "needs immediate recalibration.", "is offline for maintenance.", "shield harmonics are out of sync.", "showing strange thermal spikes.", "has a breached perimeter fence.", "comms are picking up static.", "requires a full diagnostic.", "is secure.", "reporting a false alarm.", "coolant leak detected.", "lighting system is flickering.", "droids are acting up again.", "logged a security violation.", "environmental controls failing.", "needs a fresh bacta supply.", "requires heavy ordnance restock.", "is operating at 40% capacity.", "needs the debris cleared.", "is locked down.", "shows unauthorized access.", "ventilation is clogged.", "needs a perimeter sweep.", "is reading multiple motion triggers."],
    casual: ["Anyone seen my hydrospanner?", "Chow hall is serving rations again.", "Another spore storm incoming.", "Maker, it's hot today.", "Copy that.", "On it.", "Negative.", "Stand by.", "Stop tying up the comms.", "Anyone seen my hydrospanner?", "Chow hall is serving rations again.", "Another spore storm incoming.", "Maker, it's hot today.", "Copy that.", "On it.", "Negative.", "Stand by.", "Stop tying up the comms.", "Did anyone else hear that roar?", "I hate this jungle.", "My armor joints are full of mud.", "Is the relief shift awake yet?", "Acknowledge.", "Affirmative.", "I need a fresh power pack.", "These local bugs are the size of speeders.", "Keep your helmets sealed.", "Who left the armory unlocked?", "Has the supply shuttle landed yet?", "They say the rebels are active in the next sector.", "Can we get a medic down here?", "I think my comm-link is busted.", "Don't wander off the path.", "Watch out for the carnivorous plants.", "Roger that.", "Say again? Getting interference.", "I'm not cleaning that up.", "Who's got the sabacc cards?", "My blaster is jammed with dirt.", "When is our next rotation off this rock?", "Understood.", "Send a maintenance droid.", "Keep your eyes peeled.", "That wasn't a drill.", "I'm reading movement on the scanner.", "Check your filters.", "This humidity is frying my circuits.", "Hold position."],
    customMessages: [
        { user: "GC-3170", body: "Don't touch my diagnostic tools while I'm out." },
        { user: "SGT_VEX", body: "All off-duty personnel report to courtyard for inspection." },
        { user: "GC-9033", body: "Who forgot to seal the secondary exhaust port filter-pod?" },
        { user: "TB-9006", body: "Which fatass ate all the fruit?" },
        { user: "FT-1313", body: "I think a felucian dropped a big one in the toilet..." },
        { user: "SGM-8351", body: "I don't have resentment for anyone except TBS-7385" },
        { user: "TK-4498", body: "I propose that SGMs make all troopers assemble for drills." },
        { user: "TK-4498", body: "Gotta whip them into shape." },
        { user: "SGM-8351", body: "You jelly baby boy." },
        { user: "GC-3170", body: "God forbid a team communicate..." },
    
    ]
};
