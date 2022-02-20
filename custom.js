let arr = ["Sony", "Apple", "SamSung", "Xiaomi"];

function listProduct() {

    let all = document.getElementById('allProduct');

    let playlist = document.getElementById("allProduct");
    let def = "<table>" +
        "<tr>" +
        "<td>" +
        "Id" +
        "</td>" +
        "<td>" +
        "Product" +
        "</td>"
    "</tr>" +
    "</table>";
    for (let i = 0; i < arr.length; i++) {
        let a = 1;
        let textDelete = '"deleteProduct" +"(" +i+")"';
        def += "<tr>" +
            "<td>" + (a + i) +
            "<td>" +
            arr[i] +
            "</td>" +
            "<td>" +
            '<button onclick="deleteProduct('+i+')">Delete </button>'+
            '<button onclick="renameProduct('+i+')">Rename </button>' +
            "</button>"+
            "</td>" +
            "</td>" +
            "</tr>"
    }
    playlist.innerHTML = def;
}
function addProduct() {
    let inputProduct = document.getElementById("fproduct").value;
    arr.push(inputProduct);
    listProduct();
}
function deleteProduct(e) {
    let beDelete = confirm("Are you sure?");
    let tmp = [];
    if (beDelete){
       for (let i = 0 ; i < arr.length;i++) {
           if (e != i) {
               tmp.push(arr[i]);
           }
       }
        arr = tmp;
        listProduct();
    }

}
function renameProduct(i) {
    let name = prompt("Change Name: ");
    arr[i] = name;
    listProduct();
}