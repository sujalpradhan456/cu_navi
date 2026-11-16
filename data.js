/* CU Nav directory data
   Replace/add entries using VERIFIED information from your Excel directory.
   Do not guess names, cabin numbers, floors or locations.
*/
window.CUNAV_DATA = {
  teachers: [
    // Example format:
    // { name: "Teacher full name", department: "Department", building: "C3", floor: "6", room: "610" }
  ],
  offices: [
    { name: "Microsoft Skill Centre", type: "Centre", building: "C3", floor: "1", details: "Verify exact location before publishing." },
    { name: "Library", type: "Facility", building: "C3", floor: "2", details: "Verify exact location before publishing." }
    // Add administrative offices, centres and other facilities from the spreadsheet.
  ],
  rooms: [
    // Example format:
    // { name: "Room 610", building: "C3", floor: "6", room: "610", category: "Classroom" }
  ],
  buildings: [
    { name: "C3", floors: ["Ground", "1", "2", "3", "4", "5", "6"] }
  ]
};
