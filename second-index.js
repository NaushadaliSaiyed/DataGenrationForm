let tbody = document.getElementById("tbody")
creatHtml()

function creatHtml(){
    

    let fullData = JSON?.parse(localStorage?.getItem("myDataStorage")) || [];

    let html = ""

    fullData.forEach(myFun);

    function myFun(val){
        html += "<tr><td>"+   "<input type='checkbox'>"  +"</td>"+
        "<td>"+ val.id +"</td>"+
        "<td>"+ val.companyName +"</td>"+
        "<td>"+ val.employeeSize +"</td>"+
        "<td>"+ val.lastName +"</td>"+
        "<td>"+ val.website +"</td>"+
        "<td>"+ val.revenue +"</td>"+
        "<td>"+ val.email +"</td>"+
        "<td>"+ val.linkedin +"</td>"+
        "<td>"+ val.firstName +"</td>"+
        "<td>"+ val.phoneNo +"</td></tr>"
    }
    
    tbody.innerHTML = html;
}


function reset(){

    localStorage.clear();
    location.reload()
}
