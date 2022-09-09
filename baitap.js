// Bài 1
function minInteger() {
    var n = 0;
    var S = 0;
    while (S < 10000) {
        n++;
        S = S + n;
    }
    document.getElementById('minInteger').style.display = 'block';
    document.getElementById('minInteger').innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}

//Bài 2
function sum() {
    var S = 0;
    var x = document.getElementById('soX').value * 1;
    var n = document.getElementById('soN').value * 1;
    if(x<0||n<0){
        alert("Nhập lại dữ liệu");
        return;
    }
    if (n === 0) {
        S = 1;
    }
    else {
        for (i = 1; i <= n; i++) {
            S = S + Math.pow(x, i);
        }
    }
    document.getElementById('sum').style.display = 'block';
    document.getElementById('sum').innerHTML = "Tổng của S với n = " + n + " là " + S;
}

// Bài 3
function result(){
    var S=1;
    var n=document.getElementById('so_n').value*1;
    if (n<0){
        alert("Nhập lại dữ liệu");
        return;
    }
    if (n===0){
        S=1
    }
    else {
        for(i=1;i<=n;i++){
            S=S*i
        }
    }
    document.getElementById('giaiThua').style.display = 'block';
    document.getElementById('giaiThua').innerHTML = "Giai thừa của n = " + n + " là " + S;
}

// Bài 4
function createDiv(){
    var content="";
    for (i=1;i<=10;i++){
        if(i%2===0){
            content+="<div class='bg-danger'>Div chẵn</div>"
        }
        else{
            content+="<div class='bg-primary'>Div lẻ</div>"
        }
    }
    document.getElementById('div').innerHTML=content;
}