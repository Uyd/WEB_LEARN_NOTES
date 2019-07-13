/*
var name = prompt("谁:");
console.log(name);
var a = "来";
var b = "到";
alert(name + a + b);
*/
// 遍历数组中的元素
var a, b;
var c = "";
a = new Array('班长', '学习委员', '文体委员');
console.log(a.length);
for (b in a) {
    if (a[b] == '班长') {
        c += prompt(a[b],"a");
    }
    else{
        document.write(a[b]+'\t');
    }
}
alert(c);

// 二维数组
var student, i, j;
student = new Array();
student[0] = new Array("a0", "b0", "c0");
student[1] = new Array("a1", "b1", "c1");
student[2] = new Array("a2", "b2", "c2");
// 遍历二维数组
for (i in student) {
    for (j in student[i]) {
        document.write(student[i][j] + '\t');
    }
    document.write('<br/>');
}