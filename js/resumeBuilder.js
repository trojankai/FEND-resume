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
    "skills": ["HTML and CSS","knitting and crocheting", "baby wranglin'","learning quickly", "customer service", "time management", "bath renovations"],
    "biopic": "images/fry.jpg",
}

//adds formatted bio info to page...
 
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
formattedNameRole = formattedName + formattedRole
$("#header").prepend(formattedNameRole);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

displaySkills = function(){
$("#header").append(HTMLskillsStart);
	for (var skill in bio.skills) {
	  var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
	  $("#skills-h3:last").append(formattedSkills);
  };
}
displaySkills();




//education object
var education = {

    "schools": [
		{
		"name": "University of Southern California",
		"location": "Los Angeles, CA",
		"degree": "BA",
		"major": "Social Sciences emphasis Psychology",
		"dates": 2012,
		"url": "www.usc.edu"
		},
		{
		"name": "University of California, Irvine, Extension Program",
		"major": "Light Construction and Development Management courses",
		"location": "Irvine, CA",
		"dates": 2009 + "incomplete",
		"url": "www.unex.uci.edu"
			
		},
		{
		"name": "California State University, Dominguez Hills",
		"major": "Project Management courses",
		"degree": "certificate",
		"location": "Carson, CA",
		"dates": 2009 + "incomplete",
		"url": "www.csudh.edu"
		}
	],
	"onlineCourses": [
		{
		"school": "Udacity",
		"title": "Front End Web Development ",
		"date": 2015,
		"url": "www.udacity.com/nanodegree"
		},
		{
		"name": "Coursera",
		"title": "Introduction to Interactive Programming in Python",
		"date": "July 2015 - ",
		"url": "www.coursera.com"
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
		"description": "Call center environment-handled member concerns, handled escalated calls. Assisted in the training and development of member service representatives. Responsible for motivating representatives to meet and maintain company/ departmental standards. Responsible for issuing corrective actions or terminating employees when necessary. Evaluated and corrected timesheets to ensure payroll completed on-time."
		},
		{
		"employer":"USC Campus Cruiser",
		"title": "Driver, Dispatcher, Trainer, Field Supervisor",
		"location": "Los Angeles, CA",
		"dates": "Oct 2002 to Jan 2006",
		"description": "Trained incoming employees to work in the call center, as well as handle dispatched calls while maintaining impeccable customer service and providing safety to patrons. Opened and closed shifts, inspected vehicles for damage, patrolled field to insure that policies and procedures are properly followed by cruisers(drivers). Duties also included handling complaints and special calls, such as disabled patrons requiring wheelchair assistance."
		}
	]
}
var projects = {
	"projects":[
		{
		"title":"Project 0",
		"dates":"Aug 2015",
		"description":"Started the journey of becomming a Front End Developer",
		"images":"",		
		},
		{
		"title":"Re- branding an Elementary School",
		"dates":"Jan 2015",
		"description":"Designed a new logo for Dolores Huerta Elementary school",
		"images":"",
		}
	]
}





//display work function...
function displayWork(){
   for (var job in work.jobs){
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


//encapsulation of method display on object projects

projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
      
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
      
    if(projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
      
  }
}
projects.display();



//internationalize button code--linked to helper.js
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] + " "+name[1]
    
}

//$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

