 /*
This is empty on purpose! Your code to build the resume will go here.
 */



/*$("#main").append(["Kaisha Ansley-Gutierrez"]);
var awesomeThoughts = "I am Kaisha and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
console.log(funThoughts);*/
var name = "Kaisha Ansley-Gutierrez";
var role = "Front End Web Developer";
var email = 'trojankai@gmail.com';

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

var formattedEmail = HTMLemail.replace("%data%", email);
/*$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

/*var bio = {
    'name': formattedName,
    'role': formattedRole,
    'email': formattedEmail,
    'pictureUrl': 'images/fry.jpg',
    'welcome-message': 'Welcome to mypage',
    'skills': 'images/fry.jpg'
    
};*/

var bio = {
    "name": "Kaisha Ansley-Gutierrez",
    "role": "formattedRole",
    "contacts": {
        "mobile": "310-343-0537",
        "email": "formattedEmail",
        "github": "trojankai",
        "twitter": "trojankai",
        "location": "Whittier, CA"
    },
    "welcomeMessage": "Welcome to my Page",
    "skills": [],
    "biopic": "images/fry.jpg",
    "display": {}
}
    
    
    
    
}




$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.email);

var work = {};
work.city = "Whittier";
work.position = "Freelance Web/Graphic Designer and Stay-at-Home Mother";

$('#header').append(work.city);

$("#header").append(bio.contactInfo);
