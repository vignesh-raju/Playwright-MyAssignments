//Callback function

let browser = "chrome";
function checkBrowserVersion(browser,vc){
    setTimeout(() => {vc(browser)},2000);    
}
function versioncheck(browser){
    if(browser === "chrome"){
        console.log("The browser version of chrome: v15.1");    
    }else if(browser === "edge"){
         console.log("The browser version of edge: v23.4");  
    }
}

checkBrowserVersion(browser,versioncheck);