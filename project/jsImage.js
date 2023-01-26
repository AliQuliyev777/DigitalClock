document.querySelector(".bbb").addEventListener('click', function() {
    document.querySelector(".black").style.display = "flex"
});
document.querySelector(".yes").addEventListener('click', function() {
    document.querySelector(".black").style.display = "none"

});
document.querySelector(".X").addEventListener('click', function() {
    document.querySelector(".black").style.display = "flex"
});
document.querySelector(".X").addEventListener('click', function() {
    document.querySelector(".black").style.display = "none"

});
var sira = 0;
document.querySelector(".yes").addEventListener('click', function() {
    sira++
    if (document.querySelector("input").value == "") {
        alert("Error")

    } else {
        document.querySelector(".menu").innerHTML +=
            `
<tr>
<td>${sira}</td>
    <td>${document.querySelector(".FirstName").value}</td>
    <td>${document.querySelector(".LastName").value}</td>
    <td>${document.querySelector(".Position").value}</td>
    <td>${document.querySelector(".Ofice").value}</td>
    <td>${document.querySelector(".Salary").value}</td>

</tr>
`
        document.querySelectorAll(".yes").forEach(x => {
            if (document.querySelector(".yes").value == "") {
                x.value = ""

            }
        });
    }
})

document.querySelector(".remove").addEventListener('click', function() {
    document.querySelector(".menu").remove();
});
























// var sira = 0;
// document.querySelector("button").addEventListener('click', function() {
//     sira++
//     if (document.querySelector(".ad").value == "") {
//         alert("Error")
//     } else {


//         document.querySelector("tbody").innerHTML +=
//             `
//     <tr>
//     <td>${sira}</td>
//         <td>${document.querySelector(".ad").value}</td>
//         <td>${document.querySelector(".soyad").value}</td>
//         <td>${document.querySelector(".yas").value}</td>
//     </tr>
//     `
//         document.querySelectorAll("input").forEach(x => {
//             x.value = ""

//         });
//     }
// })