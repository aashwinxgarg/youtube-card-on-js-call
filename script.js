function createCard(titletext, cnametext, viewtext, monthstext, duration, thumbnailtext){
    // Finish this function
    let km = "";
    if(viewtext>=1000 && viewtext<999999) {
        viewtext = viewtext/1000;
        km = "K";
    }
    else if(viewtext>=1000000) {
        viewtext = viewtext/1000000;
        km = "M";
    }

    let box = document.createElement("div");
    box.setAttribute("class","box");
    document.querySelector(".container").appendChild(box);

    let left = document.createElement("div");
    left.setAttribute("class","left");
    box.appendChild(left);

    let right = document.createElement("div");
    right.setAttribute("class","right");
    box.appendChild(right);

    let imgg = document.createElement("img");
    imgg.setAttribute("class","thumbnail");
    left.appendChild(imgg);
    imgg.setAttribute("src",thumbnailtext);

    let time = document.createElement("div");
    time.setAttribute("class","time");
    left.appendChild(time);
    time.innerHTML = duration;

    let title = document.createElement("div");
    title.setAttribute("class","title");
    right.appendChild(title);
    title.innerHTML = titletext;

    let below = document.createElement("div");
    below.setAttribute("class","below");
    right.appendChild(below);

    let cname = document.createElement("div");
    cname.setAttribute("class","cname");
    below.appendChild(cname);
    cname.innerHTML = cnametext;

    let dot1 = document.createElement("div");
    dot1.setAttribute("class","dot");
    below.appendChild(dot1);
    dot1.innerHTML = "<pre> . </pre>";

    let views = document.createElement("div");
    views.setAttribute("class","views");
    below.appendChild(views);
    views.innerHTML = viewtext + km + " views";

    let dot2 = document.createElement("div");
    dot2.setAttribute("class","dot");
    below.appendChild(dot2);
    dot2.innerHTML = "<pre> . </pre>";


    let monthsold = document.createElement("div");
    monthsold.setAttribute("class","months");
    below.appendChild(monthsold);
    monthsold.innerHTML = monthstext + " months ago";
}


let titletext = prompt("Enter the video title : ");
let cnametext = prompt("Enter the channel name : ");
let viewtext = prompt("Enter the number of views: ");
let monthstext = prompt("Enter the number of months it has been: ");
let duration = prompt("Enter the video duration: ");
let thumbnailtext = prompt("Enter the thumbnail pocture link: ");


createCard(titletext,cnametext,viewtext,monthstext,duration,thumbnailtext);




// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
// createCard("Introduction to Frontend | Sigma Web Dev video #2", "CodeWithHarry", 560, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");























// let thumbnailtext = "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRMTjSa3HIEUveiXdFI6rIQTwXAg";

// let titletext = "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73";

// let cnametext = "Code with Harry";
// let viewtext = "2.2M";
// let monthstext = "7 months ago";

// let box = document.createElement("div");
// box.setAttribute("class","box");
// document.querySelector(".container").appendChild(box);

// let left = document.createElement("div");
// left.setAttribute("class","left");
// document.querySelector(".box").appendChild(left);

// let right = document.createElement("div");
// right.setAttribute("class","right");
// document.querySelector(".box").appendChild(right);

// let imgg = document.createElement("img");
// imgg.setAttribute("src",thumbnailtext);
// imgg.setAttribute("class","thumbnail");
// document.querySelector(".left").appendChild(imgg);

// let title = document.createElement("div");
// title.setAttribute("class","title");
// document.querySelector(".right").appendChild(title);
// document.querySelector(".title").innerHTML = titletext;

// let below = document.createElement("div");
// below.setAttribute("class","below");
// document.querySelector(".right").appendChild(below);

// let cname = document.createElement("div");
// cname.setAttribute("class","cname");
// document.querySelector(".below").appendChild(cname);
// document.querySelector(".cname").innerHTML = cnametext;

// let dot1 = document.createElement("div");
// dot1.setAttribute("class","dot");
// document.querySelector(".below").appendChild(dot1);
// dot1.innerHTML = "<pre> . </pre>";

// let views = document.createElement("div");
// views.setAttribute("class","views");
// document.querySelector(".below").appendChild(views);
// document.querySelector(".views").innerHTML = viewtext;

// let dot2 = document.createElement("div");
// dot2.setAttribute("class","dot");
// document.querySelector(".below").appendChild(dot2);
// dot2.innerHTML = "<pre> . </pre>";


// let monthsold = document.createElement("div");
// monthsold.setAttribute("class","months");
// document.querySelector(".below").appendChild(monthsold);
// monthsold.innerHTML = monthstext;



