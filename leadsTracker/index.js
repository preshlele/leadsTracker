const saveEl = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const tabBtn  = document.getElementById("tab-btn");



let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    // renderLeads();
}

const tabs = [
    {url: "https://www.linkedin.com/in/emmanuel-mensah-141b42191/"}
]
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        
    })

// tabBtn.addEventListener("click", function(){
//     // console.log(tabs[0].url)
    
})

deleteBtn.addEventListener("click", function(){
    console.log("clicked!");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    // console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});



render = (leads ) =>{
    let listItems = "";
    myLeads.forEach(myLead => {
        console.log(myLead)
        // listItems += "<li> <a target='_blank' href='"  + myLead + " '>"  + myLead + "</a></li>";
        listItems  += `
        <li>
            <a target='_blank' href='${myLead}'>
                ${myLead}
            </a>
        </li>
        `
        console.log(listItems);
    })
    ulEl.innerHTML = listItems;
       
}
