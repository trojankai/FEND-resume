/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/





/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';



// this is the start of resumebuilder.js

//bio object to go to header
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
    "welcomeMessage": "I am Hardworking and Incredible",
    "skills": ["HTML and CSS", "knitting and crocheting", "baby wranglin'" , "learning quickly", "customer service", "time management",  "bath renovations"],
    "biopic": "images/profilePic.jpg",
    display: function(){
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedNameRole = formattedName + formattedRole;
      $("#header").prepend(formattedNameRole);

      var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedWelcome = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);


      $("#header").append(formattedBioPic);

      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(formattedLocation);
      $('#footerContacts').append(formattedLocation);

      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").append(formattedEmail);
      $('#footerContacts').append(formattedEmail);

      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts").append(formattedGithub);
      $('#footerContacts').append(formattedGithub);

      $('#header').append(formattedWelcome);

      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
          var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
           $("#skills-h3").append(formattedSkills);
    }

}
};

bio.display();

//education object and dispaly function
var education = {

    "schools": [
		{
		"name": "University of Southern California",
		"location": "Los Angeles, CA",
		"degree": "B.A.",
		"majors": ["Social Sciences emphasis Psychology"],
		"dates": 'August 2001-Jan 2006 and Jan - May 2012',
		"url": "www.usc.edu"
		},
		{
		"name": "University of California, Irvine, Extension Program",
		"majors": ["Light Construction and Development Management courses"],
		"degree": "Certificate",
    "location": "Irvine, CA",
		"dates": 2009 + " - incomplete",
		"url": "www.unex.uci.edu"

		},
		{
		"name": "California State University, Dominguez Hills",
		"majors": ["Project Management courses"],
		"degree": "Certificate",
		"location": "Carson, CA",
		"dates": 2009 + " - complete program incomplete",
		"url": "www.csudh.edu"
		}
	 ],
	 "onlineCourses": [
		{
		"school": "Udacity",
		"title": "Front End Web Development ",
		"dates": "August 2015 - present",
		"url": "www.udacity.com/nanodegree"
		},
		{
		"school": "Coursera",
		"title": "Introduction to Interactive Programming in Python",
		"dates": "July 2015 - October 2015",
		"url": "www.coursera.com"
		}
	],

  display: function() {
      for (var e = 0; e < education.schools.length; e++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[e].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
        
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].dates);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
        $(".education-entry:last").append(formattedMajors);

      }},
  displayOnline: function() {
      if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
          $("#education").append(HTMLschoolStart);
          var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
          var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
          var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
          var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
          $(".education-entry:last").append(formattedTitle + formattedSchool);
          $(".education-entry:last").append(formattedDates);
          $(".education-entry:last").append(formattedURL);
          $(".education-entry:last").append("<br>");
        }
      }
    }
    
  };

  education.display();
  education.displayOnline();


//work object
var work = {
	"jobs": [
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
		"employer": "USC Campus Cruiser",
		"title": "Driver, Dispatcher, Trainer, Field Supervisor",
		"location": "Los Angeles, CA",
		"dates": "Oct 2002 to Jan 2006",
		"description": "Trained incoming employees to work in the call center, as well as handle dispatched calls while maintaining impeccable customer service and providing safety to patrons. Opened and closed shifts, inspected vehicles for damage, patrolled field to insure that policies and procedures are properly followed by cruisers(drivers). Duties also included handling complaints and special calls, such as disabled patrons requiring wheelchair assistance."
		}
	],
  display: function(){
    $('#workExperience').append(HTMLworkStart);
    for(var i=0; i<work.jobs.length; i++){
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
      var formattedEmployerTitle= formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      var formattedLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
      $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
    }

  }
};
//display work function...

work.display();


//project object
var projects = {
	"project":[
		{
		"title":"Project 0",
		"dates":"Aug 2015",
		"description":"Started the journey of becoming a Front End Developer",
		"images":["images/project1.jpg"]
		},
		{
		"title":"Re-branding an Elementary School",
		"dates":"Jan 2015",
		"description":"Designed a new logo for Dolores Huerta Elementary school",
		"images":["images/DHES-1.png"]
		}
	],
  display: function(){
    $('#projects').append(HTMLprojectStart);
    for(var i = 0; i < projects.project.length; i++){
      var formattedProjectName = HTMLprojectTitle.replace('%data%', projects.project[i].title);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.project[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.project[i].description);
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.project[i].images);
      $('.project-entry').append(formattedProjectName, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
    }


  }
};

projects.display();


//internationalize button code--linked above
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " "+name[1];

}

//$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

//helper.js information...appended to resumebuiler info so variables are used after they are declared
/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});



// the map
var googleMap = "<div id='map'></div>";

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true,
  backgroundColor: 'black',
  draggable: true,
  panControl: false,
  scaleControl: false,
  scrollwheel: false,
  zoomControl: false
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
