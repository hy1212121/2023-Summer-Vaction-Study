const grade = parseInt(prompt("성적을 입력해주세요"));

if(isNaN(grade) || grade<0){
    console.log("제대로 숫자를 입력해주세요.");
} else if(grade>=90){
    alert("A");
} else if(grade>=80){
    alert("B");
} else if(grade>=70){
    alert("C");
} else {
    alert("D");
}