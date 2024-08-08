
//로또 랜덤 번호 제작

//일반변수에서 배열로 바꾸기

// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;

// var p = [0]; //숫자값 초기화 [0]; 값을 넣는다

// p[0]=1;
// p[1]=2;
// p[2]=3;
// p[3]=4;
// p[4]=5;
// p[5]=6;
var p = [1, 2, 3, 4, 5, 6];

// 컴 번호들
// var r1,r2,r3,r4,r5,r6;
var r = [0,0,0,0,0,0];  //컴퓨터 숫자값 초기화 [0]; 값을 넣는다

//1번
r[0] = Math.floor(Math.random() * 45) + 1;
document.write(r[0]);
document.write("<br>");
//2번
while (true) {
    r[1] = Math.floor(Math.random() * 45) + 1;
    if (r[0] != r[1]) {
        document.write(r[1]);
        document.write("<br>");
        break;
    }
}
//3번
while (true) {
    r[2] = Math.floor(Math.random() * 45) + 1;
    if (r[2] != r[0] && r[2] != r[1]) {
        document.write(r[2]);
        document.write("<br>");
        break;
    }
}
//4번
while (true) {
    r[3] = Math.floor(Math.random() * 45) + 1;
    if (r[3] != r[0] && r[3] != r[1] && r[3] != r[2]) {
        document.write(r[3]);
        document.write("<br>");
        break;
    }
}
//5번
while (true) {
    r[4] = Math.floor(Math.random() * 45) + 1;
    if (r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]) {
        document.write(r[4]);
        document.write("<br>");
        break;
    }
}
//6번
while (true) {
    r[5] = Math.floor(Math.random() * 45) + 1;
    if (r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]) {
        document.write(r[5]);
        document.write("<br>");
        break;
    }
}

// 보너스 번호

var b = 0;
while(true){
    b = Math.floor(Math.random()*45)+1;
    if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
        document.write("보너스번호:"+b);
        document.write("<br>");
        break;
    }
}


// var r1= Math.floor(Math.random()*45)+1;
// var r2= Math.floor(Math.random()*45)+1;
// var r3= Math.floor(Math.random()*45)+1;
// var r4 = Math.floor(Math.random() * 45) + 1;
// var r5 = Math.floor(Math.random() * 45) + 1;
// var r6 = Math.floor(Math.random() * 45) + 1;


// dw(r1);
// br();
// dw(r2);
// br();
// dw(r3);
// br();
// dw(r4);
// br();
// dw(r5);
// br();
// dw(r6);
// br();

//todo:
// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
// p1 ~ p6


var win = 0;    //내가 맞춘 수


// 컴퓨터의 6개 숫자와 유저6개 숫자를 비교해서 일치하는 갯수 반복문 작업

for (var i = 0; i <= 5; i = i + 1) {
    for (var j = 0; j <= 5; j = j + 1) {
        if (p[i] == r[j]) {
            win = win + 1;
        }
    }
}

// //1번

// if (p[0] == r[0]) {
//     win = win + 1;
// }
// if (p[0] == r[1]) {
//     win = win + 1;
// }
// if (p[0] == r[2]) {
//     win = win + 1;
// }
// if (p[0] == r[3]) {
//     win = win + 1;
// }
// if (p[0] == r[4]) {
//     win = win + 1;
// }
// if (p[0] == r[5]) {
//     win = win + 1;
// }

// //2번

// if (p[1] == r[0]) {
//     win = win + 1;
// }
// if (p[1] == r[1]) {
//     win = win + 1;
// }
// if (p[1] == r[2]) {
//     win = win + 1;
// }
// if (p[1] == r[3]) {
//     win = win + 1;
// }
// if (p[1] == r[4]) {
//     win = win + 1;
// }
// if (p[1] == r[5]) {
//     win = win + 1;
// }

// //3번

// if (p[2] == r[0]) {
//     win = win + 1;
// }
// if (p[2] == r[1]) {
//     win = win + 1;
// }
// if (p[2] == r[2]) {
//     win = win + 1;
// }
// if (p[2] == r[3]) {
//     win = win + 1;
// }
// if (p[2] == r[4]) {
//     win = win + 1;
// }
// if (p[2] == r[5]) {
//     win = win + 1;
// }

// //4번

// if (p[3] == r[0]) {
//     win = win + 1;
// }
// if (p[3] == r[1]) {
//     win = win + 1;
// }
// if (p[3] == r[2]) {
//     win = win + 1;
// }
// if (p[3] == r[3]) {
//     win = win + 1;
// }
// if (p[3] == r[4]) {
//     win = win + 1;
// }
// if (p[3] == r[5]) {
//     win = win + 1;
// }

// //5번

// if (p[4] == r[0]) {
//     win = win + 1;
// }
// if (p[4] == r[1]) {
//     win = win + 1;
// }
// if (p[4] == r[2]) {
//     win = win + 1;
// }
// if (p[4] == r[3]) {
//     win = win + 1;
// }
// if (p[4] == r[4]) {
//     win = win + 1;
// }
// if (p[4] == r[5]) {
//     win = win + 1;
// }

// //6번

// if (p[5] == r[0]) {
//     win = win + 1;
// }
// if (p[5] == r[1]) {
//     win = win + 1;
// }
// if (p[5] == r[2]) {
//     win = win + 1;
// }
// if (p[5] == r[3]) {
//     win = win + 1;
// }
// if (p[5] == r[4]) {
//     win = win + 1;
// }
// if (p[5] == r[5]) {
//     win = win + 1;
// }

//몇개 맞췄는지 출력

document.write("맞은 번호 결과:" + win + "<br>");

// 맞춘 갯수에따라 등수 출력

var str = "";

switch (win) {
    case 0:
    case 1:
    case 2:
        str = "꽝"
        break;
    case 3:
        str = "5등"
        break;
    case 4:
        str = "4등"
        break;
    case 5:
        str = "3등"
        //2등 처리
        for(var i=0;i<6;i=i+1){
            if(b==p[i]){
                str = "2등 "
            }
        }

        break;
    case 6:
        str = "1등"
        break;
}
document.write(str);