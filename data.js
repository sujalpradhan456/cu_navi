const teachers = [
["Dr. Vijay Kumar","-","701 A","-",""],
["Er. Rakesh Kumar","E2675","610","1","6"],
["Dr. Rohan Gupta","E12621","610","2","6"],
["Er. Sahil Attri","E19486","610","4","6"],
["Er. Shivali","E12930","610","5","6"],
["Dr. Vandana Kakran","E15611","610","6","6"],
["Dr. Shivani","E20683","610","7","6"],
["Dr. Daljeet Kaur","E15541","610","8","6"],
["Dr. Nisha Chahal","E19195","610","9","6"],
["Dr. Pawan","E7634","610","10","6"],
["Dr. Partha","E20066","610","11","6"],
["Dr. Khushhal Kumar","E20357","610","12","6"],
["Ms. Sumedha","E19774","610","13","6"],
["Dr. Priya","E20387","610","14","6"],
["Ms. Akanksha","E17500","610","15","6"],
["Ms. Sandhya","E19295","610","16","6"],
["Er. Deepa Kumari","E9647","610","17","6"],
["Ms. Maitri","E17960","610","18","6"],
["Er. Jyoti Saini","E11736","610","19","6"],
["Ms. Medha","E20467","610","20","6"],
["Ms. Swarnika Modi","E20758","610","21 (Handwritten)","6"],
["Dr. Harpreet Kaur","E4979","603","1","6"],
["Dr. Ankit Kumar Nain","E20697","603","3","6"],
["Er. Meenakshi","E17649","603","4","6"],
["Mr. Jairaj","E19962","603","5","6"],
["Ms. Muskaan","E20478","603","6","6"],
["Dr. Isha","E20440","603","7","6"],
["Dr. Rupam","E18350","603","8","6"],
["Dr. Dinesh","E19553","603","9","6"],
["Dr. Kusum Lata","E20159","603","10","6"],
["Dr. Kamayani Shrivastav","E15802","603","11","6"],
["Dr. Rashmi","E15548","603","12","6"],
["Er. Poonam Saini","E10489","603","14","6"]
].map(t => ({
  name:t[0],
  ecode:t[1],
  building:"Block C3",
  room:t[2],
  cabin:t[3],
  department:"Engineering Foundation-05",
  headOfDepartment:"Dr. Sundeep Singh",
  floor:t[4]
}));

const offices = [
{
 name:"Microsoft Skill Centre",
 type:"Centre",
 building:"Block C3",
 location:"Level 1",
 details:"Skill development and training centre",
 hours:"-"
},
{
 name:"Library",
 type:"Facility",
 building:"Not verified",
 location:"Not verified",
 details:"Library facility; building location not verified",
 hours:"-"
},
{
 name:"Centre for Student Wellbeing (DSW Counselling)",
 type:"Centre",
 building:"Academic Block C3 Annexe",
 location:"Opposite the Basketball Court",
 details:"Student counselling and wellbeing services",
 hours:"-"
},
{
 name:"Office of the Registrar",
 type:"Office",
 building:"Academic Block B1",
 location:"Room No. 207 (Level 2)",
 details:"Registrar administrative office",
 hours:"-"
},
{
 name:"Registration & Transcripts Branch (General)",
 type:"Office",
 building:"Block No. 4",
 location:"Room No. 102",
 details:"Registration and transcripts (General category)",
 hours:"-"
},
{
 name:"Registration & Transcripts Branch (SC/ST)",
 type:"Office",
 building:"Block No. 1",
 location:"Room No. 204",
 details:"Registration and transcripts (SC/ST category)",
 hours:"-"
},
{
 name:"Scholarship Branch",
 type:"Office",
 building:"Academic Block 1",
 location:"Room No. 204",
 details:"Student scholarship processing and inquiries",
 hours:"-"
},
{
 name:"Department of International Relations & Admissions",
 type:"Office",
 building:"Block 9 & Block 1",
 location:"Block 9 (Ground Level) & Block 1, Room No. 208",
 details:"International relations and admissions",
 hours:"-"
},
{
 name:"Alumni Association (Alumni Cell)",
 type:"Office",
 building:"Block-C1",
 location:"Room No. 213-C",
 details:"Chandigarh University Alumni Association office",
 hours:"Mon - Sat: 9:30 AM - 4:30 PM"
},
{
 name:"Main Admin Block (Block 1 / A1)",
 type:"Office",
 building:"Block 1 / A1 (Central Campus)",
 location:"Central Campus",
 details:"Houses Chancellor's Office, Vice-Chancellor's Office, Human Resources (HR), and academic offices",
 hours:"-"
},
{
 name:"Admin Block & Block B1/B2 Corridors",
 type:"Office",
 building:"Admin Block & Blocks B1/B2",
 location:"Corridors of B1/B2",
 details:"Houses DSW, Controller of Examinations, Accounts/Fees, Transport and DCPD offices",
 hours:"-"
},
{
 name:"Main Campus Administrative Office",
 type:"Office",
 building:"Main Campus Admin Building",
 location:"NH-05",
 details:"Primary administrative services",
 hours:"Daily: 9:00 AM - 9:00 PM"
},
{
 name:"South Campus Office",
 type:"Office",
 building:"South Campus Building",
 location:"Campus Road",
 details:"Secondary administrative services",
 hours:"-"
},
{
 name:"Academic Block B1",
 type:"Facility",
 building:"Academic Block B1",
 location:"Block 17",
 details:"Academic block",
 hours:"Mon - Sat: 9:25 AM - 4:30 PM"
},
{
 name:"Academic Block - C2",
 type:"Facility",
 building:"Academic Block - C2",
 location:"Not verified",
 details:"Academic block",
 hours:"Mon - Sat: 8:00 AM - 4:00 PM"
},
{
 name:"Kalpana Chawla Space & Research Centre",
 type:"Centre",
 building:"B4",
 location:"In front of the Herbal Garden",
 details:"Space and research centre",
 hours:"-"
}
];

window.CUNAV_DATA = {
 teachers,
 offices,
 rooms:[],
 buildings:[
  {
   name:"Block C3",
   floors:["Ground","1","2","3","4","5","6"]
  }
 ]
};
