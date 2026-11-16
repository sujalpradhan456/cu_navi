const teachers = [
["Dr. Sundeep Singh","-","711","-"],
["Dr. Vijay Kumar","-","701 A","-"],
["Er. Rakesh Kumar","E2675","610","1"],
["Dr. Rohan Gupta","E12621","610","2"],
["Er. Sahil Attri","E19486","610","4"],
["Er. Shivali","E12930","610","5"],
["Dr. Vandana Kakran","E15611","610","6"],
["Dr. Shivani","E20683","610","7"],
["Dr. Daljeet Kaur","E15541","610","8"],
["Dr. Nisha Chahal","E19195","610","9"],
["Dr. Pawan","E7634","610","10"],
["Dr. Partha","E20066","610","11"],
["Dr. Khushhal Kumar","E20357","610","12"],
["Ms. Sumedha","E19774","610","13"],
["Dr. Priya","E20387","610","14"],
["Ms. Akanksha","E17500","610","15"],
["Ms. Sandhya","E19295","610","16"],
["Er. Deepa Kumari","E9647","610","17"],
["Ms. Maitri","E17960","610","18"],
["Er. Jyoti Saini","E11736","610","19"],
["Ms. Medha","E20467","610","20"],
["Ms. Swarnika Modi","E20758","610","21 (Handwritten)"],
["Dr. Harpreet Kaur","E4979","603","1"],
["Dr. Ankit Kumar Nain","E20697","603","3"],
["Er. Meenakshi","E17649","603","4"],
["Mr. Jairaj","E19962","603","5"],
["Ms. Muskaan","E20478","603","6"],
["Dr. Isha","E20440","603","7"],
["Dr. Rupam","E18350","603","8"],
["Dr. Dinesh","E19553","603","9"],
["Dr. Kusum Lata","E20159","603","10"],
["Dr. Kamayani Shrivastav","E15802","603","11"],
["Dr. Rashmi","E15548","603","12"],
["Er. Poonam Saini","E10489","603","14"]
].map(t => {
    const floor = Number(String(t[2]).match(/\d/)?.[0] || 0);

    return {
        name: t[0],
        ecode: t[1],
        building: "Block C3",
        room: t[2],
        cabin: t[3],
        floor: floor || null,
        department: "Engineering Foundation-05",
        headOfDepartment: "Dr. Sundeep Singh",
        type: "Teacher"
    };
});


const offices = [

{
    name: "Microsoft Skill Centre",
    type: "Centre",
    building: "Block C3",
    floor: 1,
    location: "Level 1",
    details: "Skill development and training centre"
},

{
    name: "Library",
    type: "Facility",
    building: "Block C3",
    floor: 2,
    location: "Level 2",
    details: "University C3 Library"
},

{
    name: "Centre for Student Wellbeing (DSW Counselling)",
    type: "Centre",
    building: "Academic Block B3 ",
    location: "Opposite the Basketball Court",
    details: "Student counselling and wellbeing services"
},

{
    name: "Office of the Registrar",
    type: "Office",
    building: "Academic Block B1",
    location: "Room No. 207 (Level 2)",
    details: "Registrar administrative office"
},

{
    name: "Registration & Transcripts Branch (General)",
    type: "Office",
    building: "Block No. B4",
    location: "Room No. 102",
    details: "Registration and transcripts (General category)"
},

{
    name: "Registration & Transcripts Branch (SC/ST)",
    type: "Office",
    building: "Block No. A1",
    location: "Room No. 204",
    details: "Registration and transcripts (SC/ST category)"
},

{
    name: "Scholarship Branch",
    type: "Office",
    building: "Academic Block A1",
    location: "Room No. 204",
    details: "Student scholarship processing and inquiries"
},

{
    name: "Department of International Relations & Admissions",
    type: "Office",
    building: "Block 9 & Block A1",
    location: "Block 9 (Ground Level) & Block 1, Room No. 208",
    details: "International relations and admissions"
},

{
    name: "Alumni Association (Alumni Cell)",
    type: "Office",
    building: "Block-C1",
    location: "Room No. 213-C",
    details: "Chandigarh University Alumni Association office",
    hours: "Mon - Sat: 9:30 AM - 4:30 PM"
},

{
    name: "Main Admin Block (Block 1 / A1)",
    type: "Office",
    building: "Block 1 / A1 (Central Campus)",
    location: "Central Campus",
    details: "Chancellor's Office, Vice-Chancellor's Office, Human Resources and academic offices"
},

{
    name: "Admin Block & Block B1/B2 Corridors",
    type: "Office",
    building: "Admin Block & Blocks B1/B2",
    location: "Corridors of B1/B2",
    details: "DSW, Controller of Examinations, Accounts/Fees, Transport and DCPD offices"
},

{
    name: "Main Campus Administrative Office",
    type: "Office",
    building: "Main Campus Admin Building",
    location: "A1",
    details: "Primary administrative services",
    hours: "Daily: 9:00 AM - 9:00 PM"
},

{
    name: "South Campus Office",
    type: "Office",
    building: "South Campus Building",
    location: "Campus Road",
    details: "Secondary administrative services"
},

{
    name: "Academic Block B1",
    type: "Facility",
    building: "Academic Block B1",
    location: "Towards right side after entering Gate 2 ",
    details: "Academic block"
},

{
    name: "Academic Block - C2",
    type: "Facility",
    building: "Academic Block - C2",
    location: "Adjacent to main ground",
    details: "Academic block"
},

{
    name: "Kalpana Chawla Space & Research Centre",
    type: "Centre",
    building: "B4",
    location: "In front of the Herbal Garden",
    details: "Space and research centre"
}

];


window.CUNAV_DATA = {
    teachers: teachers,
    offices: offices,
    rooms: [],
    buildings: [
        {
            id: "block-c3",
            code: "C3",
            name: "Block C3",
            category: "Academic Block",
            x: 11,
            y: 68.2,
            description: "Engineering Foundation-05 faculty cabins, Microsoft Skill Centre & C3 Library",
            screen: "c3",
            floors: [
                "Ground",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7"
            ]
        },
        {
            id: "block-b1",
            code: "B1",
            name: "Academic Block B1",
            category: "Academic & Admin",
            x: 28.5,
            y: 28.5,
            description: "Office of the Registrar (Room 207) and academic corridors"
        },
        {
            id: "block-b2",
            code: "B2",
            name: "Academic Block B2",
            category: "Academic & Admin",
            x: 28.5,
            y: 40,
            description: "Exam, Accounts/Fees, Transport and DCPD corridors"
        },
        {
            id: "block-b4",
            code: "B4",
            name: "Block B4",
            category: "Academic & Research",
            x: 13,
            y: 46.8,
            description: "Registration & Transcripts (General) and Kalpana Chawla Space & Research Centre"
        },
        {
            id: "dsw",
            code: "DSW",
            name: "DSW Block",
            category: "Student Services",
            x: 24.8,
            y: 46.8,
            description: "Department of Student Welfare opposite B3 Parking"
        },
        {
            id: "block-b3",
            code: "B3",
            name: "Academic Block B3",
            category: "Academic & Wellbeing",
            x: 36,
            y: 46.8,
            description: "Centre for Student Wellbeing (DSW Counselling) opposite Basketball Court"
        },
        {
            id: "block-a1",
            code: "A1",
            name: "Main Admin Block (Block A1)",
            category: "Administration",
            x: 60.5,
            y: 15.2,
            description: "Central Campus Admin, Scholarship Branch & Registration (SC/ST)"
        },
        {
            id: "block-c1",
            code: "C1",
            name: "Block C1",
            category: "Academic & Alumni",
            x: 45,
            y: 69.5,
            description: "Alumni Association (Alumni Cell, Room 213-C)"
        },
        {
            id: "block-c2",
            code: "C2",
            name: "Academic Block C2",
            category: "Academic Block",
            x: 45,
            y: 81.5,
            description: "Academic block adjacent to Main Ground"
        },
        {
            id: "fountain-park",
            code: "FP",
            name: "Fountain Park",
            category: "Landmark",
            x: 57,
            y: 38.5,
            description: "Central campus landmark between Block B1/B3 and A2/A3"
        },
        {
            id: "main-ground",
            code: "MG",
            name: "Main Ground",
            category: "Sports & Events",
            x: 28.2,
            y: 75,
            description: "Central university sports ground flanked by C3, C1 and C2"
        },
        {
            id: "gate-2",
            code: "G2",
            name: "Gate 2",
            category: "Campus Gate",
            x: 40.5,
            y: 16,
            description: "Main entry road leading toward Academic Block B1"
        }
    ]
};
