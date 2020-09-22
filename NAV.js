var userList = "off"
var cartInfo = "off"
var bellInfo = "0ff"
var discoverInfo = "off"
var locationInfo = "off"
var a = ['acount', 'oou', 'ouo', '2345', 'ouo', 'ggggggggggggggg']

// user下拉選單
function showUserList() {
    $(".user-list").css({ "display": "flex" })
    userList = "on"
    $(".T").css({
        "transform": "rotateZ(180deg)",
        "transition": "0.5s"
    })
}
function hideUserList() {
    $(".user-list").css({ "display": "none" })
    userList = "off"
    $(".T").css({
        "transform": "rotateZ(0deg)",
        "transition": "0.5s"
    })

}

// discover hover
function showDiscoverInfo() {
    $(".disco-list").css({ "display": "flex" })
    discoverInfo = "on"
}
function hideDiscoverInfo() {
    $(".disco-list").css({ "display": "none" })
    discoverInfo = "off"
}

// cart hover
function showCartInfo() {
    $(".cart-info").css({ "display": "flex" })
    cartInfo = "on"
}
function hideCartInfo() {
    $(".cart-info").css({ "display": "none" })
    cartInfo = "off"
}

// bell hover
function showBellInfo() {
    $(".bell-info").css({ "display": "flex" })
    bellInfo = "on"
}
function hideBellInfo() {
    $(".bell-info").css({ "display": "none" })
    bellInfo = "off"
}

// input location 
function showLocationInfo() {
    $(".location-list").css({ "display": "flex" })
    locationInfo = "on"
}
function hideLocationInfo() {
    $(".location-list").css({ "display": "none" })
    locationInfo = "off"
}


// $('#click').click(
//     function () { console.log("隨便你") }
// _ => console.log("隨便你") 
//     _ => {
//         if ($('#location').val() !== a[0]) {
//             console.log($('#location').val())
//             console.log(a[0])
//             console.log('false')
//         }
//         else {
//             console.log('sucsess')
//         }
//     }

// )

// $('#click').click(
//     _ => {
//         if (a.filter(the => the == $('#location').val()).length > 0) {
//             console.log($('#location').val())
//             console.log(a)
//             console.log('sucsess')
//         }
//         else {
//             console.log('false')
//         }
// var input = $('#location').val();
// var exist = false;
// a.forEach(
//     e => {
//         if(e == input) {
//             // exist = true
//         }
//     }
// )

// if(exist == true) {
//     console.log('sucsess')
// }
//     }
// )


// $('location').input(
//     _=>

// )

$("#click").hover(_ => console.log('in'), _ => console.log('out'))

$("#gmail").hover(_ => $(".language").val("Hahow@gmail.com"))
$("#yahoo").hover(_ => $(".language").val("Hahow@yahoo.com.tw"))
$("#hotmail").hover(_ => $(".language").val("Hahow@hotmail.com.tw"))
$("#input-location").click(_ => $(".location").val("輸入地點"))
$("#TW").click(_ => $(".location").val("TW 台灣 新台幣（TWD)"))



$(".li-user").hover(_ => showUserList(), _ => hideUserList())
$(".li-r").hover(_ => showCartInfo(), _ => hideCartInfo())
$(".li-b").hover(_ => showBellInfo(), _ => hideBellInfo())
$(".disco").hover(_ => showDiscoverInfo(), _ => hideDiscoverInfo())
// 下拉選單
// $(".location").click(
//     _=> 
// )



// 注意：
// ＿＝>一行不需{}
// 分清楚
// class&id
// = &==
// 修改變數＆宣告變數
// debug要用cosole模式改,console.log要下對地方


$(".T").click(_ => userList == "off" ? showUserList() : hideUserList())
$(".location").click(_ => locationInfo == "off" ? showLocationInfo() : hideLocationInfo())

// append 新增指定內容 html 換成指定內容 css

for (var i = 0; i < 11; i = i + 1) {
    $(".bell-info-ul").append(
        '<span class="bell-info-section">' +
        '<span>' +
        '<img class="bell-portrait" src="./img/螢幕快照 2020-02-02 上午10.40.52.png" alt="">' +
        '<span class="bell-section-colum">' +
        '<p>' +
        '你曾經想學過網頁設計嗎?' +

        '曾經看過線上課程，大部分的程式設計教學往往只講解功能沒教你如何讓網頁好看...' +

        '</p>' +
        '<p>1 年前</p>' +
        '</span>' +
        '</span>' +

        '</span>'
    )
}


