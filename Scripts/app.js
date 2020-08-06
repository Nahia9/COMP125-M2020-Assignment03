/* Author: Nahia Akter
   Date  : 03/07/2020
   Description: JavaScript file for html page
*/
(function(){

    // named function
        
    function Start()
    {
        console.log('%cApp Started...', "color:white; font-size: 24px;");   

       let title = document.title;

       title = title.toLowerCase();

       console.log(`The title of the page is ${title}`);

    }
    
    window.addEventListener("load", Start);

    let title = document.querySelector("title").innerText;

    // function for home page
     function aboutMeText()
    {
        let pString =
        `   My name is Nahia Akter and I'm from Bangladesh.Currently,enrolled as a second semester student of Software Engineering Technnology 
            at Centennial College. This is a new sector for me and there are so many things to learn. Learning computer language is hard but it is
             also interesting. When I get success in coding a program and understand how its works, I become so happy. `;
        let mission =
        `To be a good human being always and as well as a good software Engineer.`;
        document.getElementsByTagName("h2")[0].innerText = "About me";
        document.getElementsByTagName("h2")[1].innerText = "Mission";
        document.getElementsByTagName("p")[0].innerText = pString;
        document.getElementsByTagName("blockquote")[0].innerText = mission;
        document.getElementsByTagName("h2")[2].innerText = "Favourite Things To do:";
    }
    // Function for project page
    function project()
    {
    document.getElementById("pro1").innerHTML = 
       "My first project was developing a website for a real state agent."+
       "Realtor's website is literally their face on the world wide web. So it needs to be attractive."+
       "There was the information about the houses for sale including their details pictures and price.";
    document.getElementById("pro3").innerHTML = 
        "Currently I'm working on SRS documentation in Software Engineering Metholody."+
        "A software requirements specification is the basis for the entire project."+
        "It used to provide critical information to multiple teams:development, quality assurance, operations, and maintenance."
    document.getElementById("pro2").innerHTML = 
        "I worked on pandas in a team. pandas is a fast, powerful, flexible and easy to use open source data analysis"+
        "and manipulation tool, built on top of the Python programming language.this semester I'm going to learn more about Python."
    }

    //switch title and load the page
    switch (title) {
        case "About me":
            window.addEventListener("load", aboutMeText);
            break;
        case "Projects":
            window.addEventListener("load", project);
    
        default:
            break;
    } 

})();
