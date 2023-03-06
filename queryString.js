const queryString=require('querystring');

let urlQuery="user=Karthick&access=true&role=trainee&id=1234&practice=LAMP";

let parsedObject = queryString.parse(urlQuery);

console.log("Parsed Object:", parsedObject);
  

//Objects to URL query

let urlObject = {user: "karthick",access: true,role: "traineee",id:'1234',practice:'LAMP'};

let parsedQuery = queryString.stringify(urlObject);

console.log("\nParsed Query:", parsedQuery);