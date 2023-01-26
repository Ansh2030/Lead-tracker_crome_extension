const inputbtn = document.getElementById("input-btn");
let myLeads=[]
const inputEl = document.getElementById("input-el")
const ulel= document.getElementById("ul-el")


 const Leadsfromlocalstorage= JSON.parse(localStorage.getItem("myLeads"))
console.log( Leadsfromlocalstorage)
if(Leadsfromlocalstorage){
    myLeads= Leadsfromlocalstorage;
    render(myLeads);
}

const delbtn = document.getElementById("delete-btn")
delbtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads= []
    render( myLeads)
})




inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    render(myLeads);
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

})


//save tab

let tabBtn= document.getElementById("tab-btn")
tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(lead){
    
let listitem = ""
for(let i = 0;i<lead.length;i++)
{
    //listitem += "<li>" +"<a target='_blank' href=' "+ myLeads[i] +"'>"+ myLeads[i] + "</a>" +"</li>"
    //writing the above code using string template
    listitem+= 
    `<li>
        <a target= '_blank' href=${myLeads[i]}>
             ${lead[i]}
        </a>
    </li>`
}

ulel.innerHTML = listitem


}