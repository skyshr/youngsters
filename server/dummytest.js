const fs = require('fs');
let idkey = 1;
let menImgSrc = fs.readdirSync('../project/public/img/men');
let womenImgSrc = fs.readdirSync('../project/public/img/women');

var userid = ["마서기영이","안성준","위성진","노진형", "ahnSJ","wsjSJ", "NEETBear", "Sungjin","Ahnsungjhun", "skyshr", "sky", "lol은중독이다", "롤창인생베이비", "나도몰라", "jirals", "ParkKyungBae", "Jidoil", "지도일", "박경배", "노진탁", "mrno", "이혜진", "김기원", "KKO", "김민욱", "kmW", "김재연", "KJYeon", "김재원", "김진경", "박승재", "박경배_스테파노", "안성욱", "박태현", "이시은", "장보은", "전민수", "정종찬", "정태수", "현", "Heidi", "HomePlus", "효마플러스", "권원현", "이삭park","이충현", "dlfldhs", "enttt1", "wkfrkdysotkfkd", "sjfmftkfkd", "lovee", "nature", "fsss", "fart", "ggji", "mlggg", "sjdmldntsmsahtmqdl", "snrnqhekdPQMswl", "rmtkfkadkf", "rlskgksl", "hani", "wjdakfwjdakf", "dkfrheh", "sjfmf", "dnfflsl", "dlfmaah", "fmsms", "ekdtlsdp", "rpqnxkr", "gkskaks", "gksmseptk", "fkdgownjdy,", "tkfkd", "gownjdysork", "soak", "dmaeh", "ahffk", "wnsmsrmsu", "fmfrmsurk", "tkfkdgksmstkfka", "ekdtlsdlslRKek", "tlsmsdnffl", "wlsmsakfdkdy", "rmfjgrp", "askgdltk", "fkdgksek", "goTsmsepdlwp", "ditkfkddmfdkf", "rjtrkxdkdy", "qnxkrdldlT", "djwp", "qkfdyd", "tjaktpdy", "dhsmfskfekd", "tlsdmsdnf", "flfurhgo", "wpqkfdjfrnf", "dmfemfdjqhkdy", "skfmfdnl", "gotjckadk", "dkdhkTejs", "dkvms", "tkfkddmfh", "skfmfwkq", "dkwnjdy", "eksgkskdml", "tkfkddmfh1"];
var userpw = ['aaa', 'aba', 'acc', 'asdasdas', 'asdljfasdf', 'asdfjabsdlg', 'asdjbfhasdjfhb', 'asdjkfaskjd', 'asdjfna', 'asdjfk', 'sdfj', 'v v', 'Pfdfnbak@f', 'ghgurn', 'nboen)))'];
var usernameMen = ['안성준', "위성진", "노진형", "서기영", "박경배", "스테파노", "지도일", "Jidoil", "노진탁", "권원현", "김기원", "박성웅", "김민욱", "김재연", "이시은", "김재원", "김진경", "박승재", "박이삭", "지지지", "안성욱", "박태현", "정종찬", "정태수", "이충현", "진예찬", "서도일", "최원형", "변재덕", "강주호", "서수길", "서한량", "유비", "관우", "노무진", "조현명", "진상민", "강동수", "강무성"];
var usernameWomen = ['강다혜', '강수빈', '강승희', '강예은', '이혜진', '이혜인', '장보은', '조민경', '강정아', '김혜린', '곽미진', '연지수', '김나연', '강유진', '김담비', '김담빈', '오경민','이경은', '김도경', '김민지', '김연주', '김소연', '김수연', '김보현', '백장선', '김지혜', '김윤경', '김유민', '김유희', '나유진', '김지은', '박현아', '박보람', '김경란', '김수련', '정민주', '조금비', '이아름', '안현아', '류휘향'];
var useryear = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002];
var useraddr = ["충청북도 청주시 상당구 1순환로", "경상북도 구미시 1공단로", "경기도 화성시 10용사로", "충청남도 천안시 서북고 1공단1길", "광주광역시 광산구 2순환로", "영국", "경기도 평택시 2함대길", "충청북도 청주시 상당구 2순환로","부산광역시 강서구", "부산광역시 강서구 공항앞길", "서울특별시 강남구 개포로", "서울특별시 강남구 논현로", "서울특별시 강동구 명일동", "제주특별자치도 제주시 가린내길"];
var useraddrdet = ["비밀", "아파트", "현대아파트 2동 999호", "지옥", "우리집알아서뭐하노", "무궁화꽃이피었습니다", "도지코인개떡상중", "도도도도지지지지", "비트코인올인원", "자드가자", "aaa", "삐뚤빠뚤", "똑땅해", "기싱궁고또", "기모뤼", "나무", "경일겜", "아이지", "무슨말을해야", "할까요", "아무고또", "모르겠데스", "스고이", "미미미미", "귀여미월드", "이불", "내번호", "내이름은", "어벤져스", "하하하"];
var q1 = ['아바타', '어벤져스 엔드게임', '노트북', '용의자 X의 헌신', '워낭소리'];
var q2 = ["짜장면", "김치찌개", "떡볶이", "초밥"];
var q3 = ["어피치", "춘식이", "프로도", "제이지", "무지", "네오", "라이언", "튜브"];
var q5 = ["E", "I"];
var q6 = ["S", "N"];
var q7 = ["F", "T"];
var q8 = ["J", "P"];

// console.log(menImgSrc);
// console.log(menImgSrc.length);
// console.log(womenImgSrc.length);
// console.log(userid.length);
// console.log(usernameMen.length);
// console.log(usernameWomen.length);
// console.log(new Set(usernameMen).size);
// console.log(new Set(usernameWomen).size);

function dataJson() {
    let dataArr = [];
    for (let value=0; value<40; value++) {
        let data = {};
        data["idkey"] = value+40;
        data["userid"] = userid[value+39];
        data["userpw"] = userpw[Math.floor(Math.random()*userpw.length)];
        data["username"] = usernameWomen[value]
        data["gender"] = "여자";
        data["img"] = womenImgSrc[value];
        data["useryear"] = useryear[Math.floor(Math.random()*useryear.length)];
        data["age"] = 2023 - data["useryear"];
        data["useraddr"] = useraddr[Math.floor(Math.random()*useraddr.length)];
        data["useraddrdet"] = useraddrdet[Math.floor(Math.random()*useraddrdet.length)];
        data["q1"] = q1[Math.floor(Math.random()*q1.length)];
        data["q2"] = q2[Math.floor(Math.random()*q2.length)];
        data["q3"] = q3[Math.floor(Math.random()*q3.length)];
        data["q4"] = (0.250+Math.random()/2).toFixed(3);
        data["q5"] = q5[Math.floor(Math.random()*q5.length)];
        data["q6"] = q6[Math.floor(Math.random()*q6.length)];
        data["q7"] = q7[Math.floor(Math.random()*q7.length)];
        data["q8"] = q8[Math.floor(Math.random()*q8.length)];
        // console.log(data);
        dataArr.push(data);
    }
    // console.log(dataArr);
    fs.writeFileSync('./dummywomen.json', JSON.stringify(dataArr));
}

dataJson();

