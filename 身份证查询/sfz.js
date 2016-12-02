$(document).ready(function () {
            var headers = {"apikey": "5292d6abaf0ec95c2b7924551e50668f"};
        $("#idBtn").click(function () {
            {
                $("#result").attr("style","display:none");
                var id = $("#idIn").val();
                if (id == "") {
                    $(".res").remove();
                    $("#container").append("<p class='res'>" + "请输入要查询的身份证号再点击按钮!");
                }
                else {
                    //url变量指定了http访问的地址
                    var url = "http://apis.baidu.com/apistore/idservice/id";
                    url = url + "?id=" + id;
                    console.dir(url);
                    $.ajax(url, {
                        method: "GET",
                        headers: headers,
                        dataType: "json",
                        success: function (data) {
                            console.dir(data);
                           if (data.errNum == "-1") {
                                $(".res").remove();
                                $("#container").append("<p class='res'>" + "身份证号码不合法!");
                            }
                            else {
                                $(".res").remove();
                                if (data.retData.sex == 'M')
                                    $("#gend").text("男");
                                else if (data.retData.sex == 'F') {
                                    $("#gend").text("女");
                                }
                                else {
                                    $("#gend").text("未知");
                                }
                                $("#birth").text(data.retData.birthday);
                                $("#addr").text(data.retData.address);
                               $("#result").attr("style","display:block");
                            }
                        }
                    });
                }

            }
        });

         $(this).keydown(function(e){
                        if(e.keyCode == 13)
                        $("#idBtn").focus();
         });
    });