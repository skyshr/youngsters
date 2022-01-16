const fs = require('fs');

var userid = ["마서기영이","안성준","위성진","노진형", "ahnSJ","wsjSJ", "NEETBear", "Sungjin","Ahnsungjhun", "skyshr", "sky", "lol은중독이다", "롤창인생베이비", "나도몰라", "jirals", "ParkKyungBae", "Jidoil", "지도일", "박경배", "노진탁", "mrno", "이혜진", "김기원", "KKO", "김민욱", "kmW", "김재연", "KJYeon", "김재원", "김진경", "박승재", "박경배_스테파노", "안성욱", "박태현", "이시은", "장보은", "전민수", "정종찬", "정태수", "현", "Heidi", "HomePlus", "효마플러스", "권원현", "이삭park","이충현", "dlfldhs", "enttt1", "wkfrkdysotkfkd", "sjfmftkfkd", "lovee", "nature", "fsss", "fart", "ggji", "mlggg", "sjdmldntsmsahtmqdl", "snrnqhekdPQMswl", "rmtkfkadkf", "rlskgksl", "hani", "wjdakfwjdakf", "dkfrheh", "sjfmf", "dnfflsl", "dlfmaah", "fmsms", "ekdtlsdp", "rpqnxkr", "gkskaks", "gksmseptk", "fkdgownjdy,", "tkfkd", "gownjdysork", "soak", "dmaeh", "ahffk", "wnsmsrmsu", "fmfrmsurk", "tkfkdgksmstkfka", "ekdtlsdlslRKek", "tlsmsdnffl", "wlsmsakfdkdy", "rmfjgrp", "askgdltk", "fkdgksek", "goTsmsepdlwp", "ditkfkddmfdkf", "rjtrkxdkdy", "qnxkrdldlT", "djwp", "qkfdyd", "tjaktpdy", "dhsmfskfekd", "tlsdmsdnf", "flfurhgo", "wpqkfdjfrnf", "dmfemfdjqhkdy", "skfmfdnl", "gotjckadk", "dkdhkTejs", "dkvms", "tkfkddmfh", "skfmfwkq", "dkwnjdy", "eksgkskdml", "tkfkddmfh1"];
var userpassword = ['aaa', 'aba', 'acc', 'asdasdas', 'asdljfasdf', 'asdfjabsdlg', 'asdjbfhasdjfhb', 'asdjkfaskjd', 'asdjfna', 'asdjfk', 'sdfj', 'v v', 'Pfdfnbak@f', 'ghgurn', 'nboen)))'];
var username = ['안성준', "위성진", "노진형", "서기영", "박경배", "스테파노", "지도일", "Jidoil", "노진탁", "권원현", "김기원", "이혜진", "김민욱", "김재연", "이시은", "김재원", "김진경", "박승재", "박이삭", "효마플러스", "안성욱", "박태현", "정종찬", "정태수", "이충현", "sky", "air", "최원형", "변재덕", "강주호", "곰돌이푸", "키티", "정신병"];
var useremail = [];
var test = ['@google.com', '@naver.com', '@kakao.com', '@doji.com', '@ahncompany.com'];

for (var element of username) {
    let random = Math.floor(Math.random()*5);
    useremail.push(element+test[random]);
}

// console.log(useremail);
// console.log(useremail.length);

var useraddress = ["충청북도 청주시 상당구 1순환로", "경상북도 구미시 1공단로", "경기도 화성시 10용사로", "충청남도 천안시 서북고 1공단1길", "광주광역시 광산구 2순환로", "영국", "경기도 평택시 2함대길", "충청북도 청주시 상당구 2순환로","부산광역시 강서구", "부산광역시 강서구 공항앞길", "서울특별시 강남구 개포로", "서울특별시 강남구 논현로", "서울특별시 강동구 명일동", "제주특별자치도 제주시 가린내길"];
var useraddressdetail = ["비밀", "아파트", "현대아파트 2동 999호", "지옥", "우리집알아서뭐하노", "무궁화꽃이피었습니다", "도지코인개떡상중", "도도도도지지지지", "비트코인올인원", "자드가자"];
var userpoint = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 100, 110, 120, 130, 140, 150, 160 ,170, 180, 190, 200, 250, 300, 350, 400, 700];
var champseq = ['1/3/5/6/7/134', '77/45', '999/99/9', '899/3/19/21/333/1332', '368/111/222/333/444/555/666/777', '75/44/33/90/97/13/12/792', '81', '17/177', '567/456/453/345/2/550', '424/444/234/244/222'];

// console.log(userid.length);
// console.log(new Set(userid).size);

// var dataPath = 'dummyuser.json';
// var finalData = {};

// for (var element of userid) {
//     let data = {};
//     data['userpassword'] = userpassword[makeRandomNumber(userpassword.length)];
//     data['useremail'] = useremail[makeRandomNumber(useremail.length)];
//     data['useraddress'] = useraddress[makeRandomNumber(useraddress.length)];
//     data['useraddressdetail'] = useraddressdetail[makeRandomNumber(useraddressdetail.length)];
//     data['userpoint'] = userpoint[makeRandomNumber(userpoint.length)];
//     data['champseq'] = champseq[makeRandomNumber(champseq.length)];

//     if (username.includes(element)) data['username'] = element;
//     else data['username'] = username[makeRandomNumber(username.length)];
//     finalData[element] = data;
// }

// fs.writeFileSync(dataPath, JSON.stringify(finalData));
// console.log(finalData['마서기영이'])
// console.log(finalData['지도일']);

function makeRandomNumber(length) {
    return Math.floor(Math.random()*length);
}

var title = ["96살의 내가 22살 당시의 나에게 해주고싶은 말", "51년째 깨지지 않는 기네스 기록 ㄷㄷㄷㄷ", "수능 성적표 주작한 이대 유튜버", "친구 이상의 사이가 되고 싶어", "욕좀 해줘라", "야필패 구분법", "탐켄치는 메기라먄서!", "얘들아 갑자기 사진이 안보여 ,,", "???:행운의 여신이 내게 미소를 짓는굿", "저 사실 섬에 살아요", "패스 노가다 보통 어디서 하더라", "옵지는 재미써 !!", "유찾게에서", "이제 9시 반인데", "와 진짜 큐 너무 오래걸리네", "5대5 내전 골드 구간 구합니다", "여러분들 제가", "탐켄치에게 생겨야 하는 스킨 목록", "(급함) 마라탕에 밥 말아먹을까 말까", "나 방금 귀여운 유미봄", "누워있다가", "중국어같지 않음?", "실2에서 이기면 20포 지면 11포인데", "신과함께 보는데 재밌네 ㅋㅋㅋ", "탑칼리스타", "미분적분학 중간고사썰", "이런 친구 심리 분석좀", "아케인 언제 끝남", "옵붕이 창모 마에스트로 성공함", "와우", "좋은아침"];
var content = ["96살이 됐어~\\n그런데 너 전에 미군한테 비누 받았지?\\n근데 비누에서 거품이 안 나와서 곤란했겠지?\\n그거 비누가 아니고 치즈다", "동전 세로로 11개 쌓기 성공\\n70년부터 지금까지 아무도 12개 못 쌓음", "공부관련 컨텐츠 올리던 이대 유튜버\\n주작한 성적표로 7만원짜리 고액과외 실화냐", "자?\\n\\n아니. 왜\\n\\n야 있잖아\\n너랑 친구 이상의 사이가 되고 싶어\\n\\n?\\n베스트프랜드 ㄱㄱ\\n\\n아니 그거보다 더\\n\\n메가 베스트프랜드 ㄱㄱ\\n\\n걍 사귀기 싫다고 해...", "ㅇㅇ", "1. 아이템을 이상하게 올린다\\n공격 한방이 승패를 가르는 야스오를 들고서 템을 비효율적으로 올리는건 패배를 자처하는 짓이다\\n2. 이득볼줄 모른다\\n라인을 버려두고 집에 간다던가 용먹을 타이밍에 카정을 친다던가 1ㄷ1인 바텀 두고 탑을 조지러 간다던가 좋은 플레이가 무엇인지 모른다\\n3. 무지성으로 라인을 민다\\n피흡이 없는 초반 야스오는 2ㄷ1 정면승부를 하지 못한다", "?", "응 아니야","롤체: 11마리+ 8용병+잘나온 템들+ 1등 로또가나?", "핸섬..", "하... ㅅㅂ 구가 뭐라고 이러고있지", "히히", "사람구해서 롤이나할까", "글 올라오지가 않아\\n다 유찾글이야\\n어케 된거야\\n다들 집돌이가 아니라 밖에 나가서 노는 인싸였냐고 젠장", "!!!!!", "내전 구하구요 엄슨생 친추 부탁드립니다", "설정에서 무슨 개인정보 보안한다고 잠금이 되어있을때 알람이 뜰때 예를 들어 카톡이 메시지가\\n안보이고 뭐뭐되있습니다 뜨는데 그거 끄는법 좀 알려주시오 ㅠ", "수영장 파티 탐켄치(꼭 썬글라스를 써야할것!)\\n하이눈 탐켄치(미각 스택 모양이 권총 모양일것!)\\n프로젝트 탐켄치(기본 컬러가 파란색일것!)\\n초능력특공대 탐켄치(귀환모션에 더미 로봇을 삼키는 모션을 넣을것!)\\nK/DA 탐켄치 (아리와 똑같은 복장일것!!!)", "빨리 아무나 말해줘 ㅠㅠ", "정글인데 유미하고 강타 안들길래\\n던지는줄알고 내가 정글간다 했더니\\n유미가 '나 서폿아니야?'\\n이러더니 닷지할게 ㅠㅠ 이랬음\\nㄱㅇㅇ", "일어나면 머리 너무 어지러운데 왜이러는지 아는사람", "1", "이제 프리시즌랭 접어야함?", "성주신 펀드 ㅋㅋㅋㅋㅋㅋ", "치속vs칼날비", "70점 만점이였는데 점수 보니까 **'27'**점 나왔음", "매판 트롤하면서 입까지털어서 일부러 팀 분위기 박살냄", "맨날 협곡에서 애쓴다 딱 걸렸어 이러는거 듣기 싫은데..", "눙물난다ㅜㅜ", "게시글 많이 안써본 나로써 뭔가 글쓰는거에 기능이 많네?", "ㅎㅇ"];
// var regdate = [];
// var modidate = [];
var hit = [];
var likeuserArr = [];
// var likeuser = [];
var comments = ["치즈 샤월~", "미친새낀가", "ㅋㅋㅋㅋㅋㅋㅋ", "사실 치즈 샤워가 장수의 비결 아닐까?", "뭐라고했는데?", "으잉 그러지마요", "그지옥 집접 경험중인 1인", "ㄷㄷㄷ.. 저도 곧 있으면 그렇게 되겠죠...", "달달하누~", "비트사고 군대가라", "저건 나도 못하겠다", "어케했누...", "좀 지리네", "ㅁㅊ놈ㄷㄷㄷ", "진짜 어캐한거지", "어캐했노 시발련ㄴ아", "개쩐당", "명예훼손죄 ㅇㅈㄹ ㅋㅋ", "ㅋㅋㅋㅋㅋㅋㅋ", "ㅉㅉ", "메가 베스트프랜드를 참아?", "ㄹㅇ;", "메가나르는 못참아", "사랑해", "이 종간나", "내 방구보다 못한놈", "못하는 야스오특 : Q계속 씀.야스오 재밌어서 하는얘들이라 못할가능성 농후함", "근본메기", "안경 알 빠졌음?", "여친 부터 사귀렴", "너는 여친없섬", "2일임ㅋ", "헤어진지"]
// var userindex = [];
// console.log(comments.slice(0,3));
// console.log(comments.length);
// console.log(title.length);
// console.log(content.length);
var length = [10, 7, 3, 3, 3, 1, 1, 1, 1, 3];

for (var k=0; k<21; k++) {
    length.push(Math.floor(Math.random()*4));
}
console.log(title.length);
console.log(content.length);
console.log(length.length);
var regdateM = ['9', '10', '11'];

// let i = 0;
// for (var element of title) {
//     console.log(element + ": " + content[i]);
//     i++;
// }
for (var k = 0; k< 31; k++) {
    let random1 = Math.floor(Math.random()*200);
    let random2 = Math.floor(Math.random()*107);
    hit.push(random1);
    likeuserArr.push(random2);
}

console.log(hit.length);
console.log(likeuserArr.length);
// console.log('0/'+[].join('/'));

var dataPath = 'dummyuserboard.json';
var finalData = {};
var useridNum = randomArr(31);
let i =0;
let j =0;
for (var element of title) {
    // console.log(element);
    // console.log(i);
    let id = userid[useridNum[i]];
    let data = {};
    let month1 = stringfy(regdateM[makeRandomNumber(3)]);
    let date1 = stringfy(String(makeRandomNumber(30)+1));
    let hr1 = stringfy(String(makeRandomNumber(24)));
    let min1 = stringfy(String(makeRandomNumber(60)));
    let sec1 = stringfy(String(makeRandomNumber(60)));
    let month2 = stringfy(regdateM[makeRandomNumber(3)]);
    let date2 = stringfy(String(makeRandomNumber(30)+1));
    let hr2 = stringfy(String(makeRandomNumber(24)));
    let min2 = stringfy(String(makeRandomNumber(60)));
    let sec2 = stringfy(String(makeRandomNumber(60)));
    let time1 = `2021-${month1}-${date1} ${hr1}:${min1}:${sec1}`;
    let time2 = `2021-${month2}-${date2} ${hr2}:${min2}:${sec2}`;
    let timearr = timeCompare(time1, time2);
    let likeuser = '0/' + randomArr(likeuserArr[i]).join('/');
    let cmts = null;

    let hitfind = hit[i];
    if (hitfind<likeuser.split('/').length-1) {
        hitfind = Math.floor(Math.random()*200) + likeuser.split('/').length;
    }

    if (i<10) {
        cmts= comments.slice(j,length[i]+j);
        j+=length[i];
    }

    else {
        cmts= getCmt(length[i]);
    }

    data['title'] = element;
    data['content'] = content[i];
    data['regdate'] = timearr[1];
    data['modidate'] = timearr[0];
    data['hit'] = hitfind;
    data['likeuser'] = likeuser;
    data['comments'] = cmts;
    finalData[id] = data;
    console.log(i);
    i++;
}

fs.writeFileSync(dataPath, JSON.stringify(finalData));

function getCmt(num) {
    if (num==0) return [];
    let tmp = new Set();
    while(tmp.size<num) {
        tmp.add(comments[Math.floor(Math.random()*33)]);
    }
    return Array.from(tmp);
}

function timeCompare(str1, str2) {
    if (str1 > str2) return [str1, str2]
    return [str2, str1]
}

function stringfy(str) {
    if (str.length==2) return str
    return '0'+str
}

function randomArr(num) {
    let tmp = new Set();
    while (tmp.size<num) {
        tmp.add(Math.floor(Math.random()*107));
    }
    return Array.from(tmp);
}
// console.log(dateCompare('919203312', '0919203402'));
// console.log(stringfy(['9','9','11','1','0','3']));
// console.log('2021-12-11 12:09:05'> '2022-02-11 12:11:05');
