const teachers = [
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
}));

const offices = [
{
 name:"Microsoft Skill Centre",
 type:"Centre",
 building:"Block C3",
 floor:1,
 location:"Level 1",
 details:"Skill development and training centre"
},
{
 name:"Library",
 type:"Facility",
 building:"Not verified",
 location:"Not verified",
 details:"Library facility; building location not verified"
},
{
 name:"Centre for Student Wellbeing (DSW Counselling)",
 type:"Centre",
 building:"Academic Block C3 Annexe",
 location:"Opposite the Basketball Court",
 details:"Student counselling and wellbeing services"
},
{
 name:"Office of the Registrar",
 type:"Office",
 building:"Academic Block B1",
 location:"Room No. 207 (Level 2)",
 details:"Registrar administrative office"
},
{
 name:"Registration & Transcripts Branch (General)",
 type:"Office",
 building:"Block No. 4",
 location:"Room No. 102",
 details:"Registration and transcripts (General category)"
},
{
 name:"Registration & Transcripts Branch (SC/ST)",
 type:"Office",
 building:"Block No. 1",
 location:"Room No. 204",
 details:"Registration and transcripts (SC/ST category)"
},
{
 name:"Scholarship Branch",
 type:"Office",
 building:"Academic Block 1",
 location:"Room No. 204",
 details:"Student scholarship processing and inquiries"
},
{
 name:"Department of International Relations & Admissions",
 type:"Office",
 building:"Block 9 & Block 1",
 location:"Block 9 (Ground Level) & Block 1, Room No. 208",
 details:"International relations and admissions"
},
{
 name:"Alumni Association (Alumni Cell)",
 type:"Office",
 building:"Block-C1",
 location:"Room No. 213-C",
 details:"Chandigarh University Alumni Association office"
},
{
 name:"Main Admin Block (Block 1 / A1)",
 type:"Office",
 building:"Block 1 / A1 (Central Campus)",
 location:"Central Campus",
 details:"Chancellor's Office, Vice-Chancellor's Office and HR"
},
{
 name:"Admin Block & Block B1/B2 Corridors",
 type:"Office",
 building:"Admin Block & Blocks B1/B2",
 location:"Corridors of B1/B2",
 details:"DSW, Controller of Examinations, Accounts/Fees, Transport and DCPD"
},
{
 name:"Main Campus Administrative Office",
 type:"Office",
 building:"Main Campus Admin Building",
 location:"NH-05",
 details:"Primary administrative services"
},
{
 name:"South Campus Office",
 type:"Office",
 building:"South Campus Building",
 location:"Campus Road",
 details:"Secondary administrative services"
},
{
 name:"Academic Block B1",
 type:"Facility",
 building:"Academic Block B1",
 location:"Block 17",
 details:"Academic block"
},
{
 name:"Academic Block - C2",
 type:"Facility",
 building:"Academic Block - C2",
 location:"Not verified",
 details:"Academic block"
},
{
 name:"Kalpana Chawla Space & Research Centre",
 type:"Centre",
 building:"B4",
 location:"In front of the Herbal Garden",
 details:"Space and research centre"
}
];

window.CUNAV_DATA = {
 teachers: teachers,
 offices: offices,
 rooms: [],
 buildings: [
  {
   name:"Block C3",
   floors:["Ground","1","2","3","4","5","6","7"]
  }
 ]
};
