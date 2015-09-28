 /*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Kaisha Ansley-Gutierrez",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "310-343-0537",
        "email": "trojankai@gmail.com",
        "github": "trojankai",
        "twitter": "trojankai",
        "location": "Whittier, CA"
    },
    "welcomeMessage": "Welcome to my Page",
    "skills": ["knitting and crocheting", "taking care of twins"," learning quickly", "excellent oral and written communication", "cooking"],
    "biopic": "images/fry.jpg",
    "display": {}
};


var education = {

    "schools": [
		{
		"name": "University of Southern California",
		"city": "Los Angeles, CA",
		"degree": "BA",
		"major": "Social Sciences emphasis Psychology",
		"dates":"",
		"schoolUrl": "www.usc.edu"
		},
		{
		"name": "University of California, Irvine, Extension Program",
		"major": "Light Construction and Development Management courses",
		"dates": "",
		"schoolUrl":"",
			
		},
		{
		"name": "California State University, Dominguez Hills",
		"major": "Project Management courses",
		"dates":"",
		}
	],
	"onlineCourses": [
		{
		"name": "Udacity",
		"courses": ["HTML and CSS","Javascript Basics","Responsive Web Design"]
		},
		{
		"name": "Coursera",
		"courses": "Introduction to Interactive Programming in Python"
		}
	
	]
};
var work = {
	"jobs":[
		{
		"employer":"University of California, Irvine",
		"title": "Senior Building Maintenance Worker",
		"location": "Irvine, CA",
		"dates": "July 2007 to January 2014",
		"description": "Perform general building maintenance, including carpentry, electrical, plumbing, drywall repair, painting, and basic HVAC.  Maintain good customer service, both internal and external. Report work completed both orally and written. Assist team members as needed."
		},
		{
		"employer":"Bally Total Fitness",
		"title": "(Acting) Supervisor, Member Services",
		"location": "Norwalk, CA",
		"dates": "Feb 2006 to June 2007",
		"description": "Call center environment-handled member concerns, handled escalated (irate) calls. Assisted in the training and development of member service representatives. Responsible for motivating representatives to meet and maintain company/ departmental standards. Responsible for issuing corrective actions or terminating employees when necessary. Evaluated and corrected timesheets to ensure payroll completed on-time."
		},
		{
		"employer":"Campus Cruiser, USC",
		"title": "Driver, Dispatcher, Trainer, Field Supervisor",
		"location": "Los Angeles, CA",
		"dates": "Oct 2002 to Jan 2006",
		"description": "Trained incoming employees to work in the call center, as well as handle dispatched calls while maintaining impeccable customer service and providing safety to patrons. Opened and closed shifts, inspected vehicles for damage, patrolled field to insure that policies and procedures are properly followed by cruisers(drivers). Duties also included handling complaints and special calls, such as disabled patrons requiring wheelchair assistance."
		}
	]
};
var projects = {
	"projects":[
		{
		"title":"",
		"dates":"",
		"description":"",
		"images":"",		
		},
		{
		"title":"",
		"dates":"",
		"description":"",
		"images":"",
		}
	]
}


//formatting and adding sections to the webpage
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
formattedNameRole = formattedName + formattedRole
$("#header").prepend(formattedNameRole);



function displayWork(){
for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
};
displayWork();		
		
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " "+name[1]
    
}

$('#main').append(internationalizeButton);