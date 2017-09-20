/**
 * Created by Kay on 2016/3/8.
 */
function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("请输入用户名");

    } else if (pass.value  == "") {

        alert("请输入密码");

    } else if(username.value == "admin" && pass.value == "123456"){

        window.location.href="index.html";

    } else {

        alert("用户名或者密码错误！")

    }
}