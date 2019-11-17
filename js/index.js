$(function () {
    // 加载导航
    $('#wnav').load('nav.html', function () {
        // 首页
        $('#home').click(function () {
            let name = $(this).attr("id");
            $("#wcontent ." + name).hide();
            $('#wcontent').load('./content/start.html')
            $('#wfooter').load('footer.html')
        })
        // 软件
        // $('#home').click(function () {
        //     $('#wcontent .mian').hide();
        //     $('#wcontent').load('./content/octance.html')
        // })
        // 渲染器
        $('#octance').click(function () {
            let name = $(this).attr("id");
            $('#wcontent .' + name).hide();
            $('#wfooter .footer').hide();
            $('#wcontent').load('./content/octance.html', function () {
                $('#oc-content').load('./content/oc-pages/cover.html')
                $('.w-oc-rd strong').click(function () {
                    $('.w-oc-rd ul').slideToggle(function () {
                        if ($('.w-oc-rd strong').next().hasClass("glyphicon-triangle-right")) {
                            $('.w-oc-rd strong').next().removeClass("glyphicon-triangle-right")
                            $('.w-oc-rd strong').next().addClass("glyphicon-triangle-bottom")
                        } else if ($('.w-oc-rd strong').next().hasClass("glyphicon-triangle-bottom")) {
                            $('.w-oc-rd strong').next().removeClass("glyphicon-triangle-bottom")
                            $('.w-oc-rd strong').next().addClass("glyphicon-triangle-right")
                        }
                    })
                })

                $('.w-gst-rd strong').click(function () {
                    $('.w-gst-rd ul').slideToggle(function () {
                        if ($('.w-gst-rd strong').next().hasClass("glyphicon-triangle-right")) {
                            $('.w-gst-rd strong').next().removeClass("glyphicon-triangle-right")
                            $('.w-gst-rd strong').next().addClass("glyphicon-triangle-bottom")
                        } else if ($('.w-gst-rd strong').next().hasClass("glyphicon-triangle-bottom")) {
                            $('.w-gst-rd strong').next().removeClass("glyphicon-triangle-bottom")
                            $('.w-gst-rd strong').next().addClass("glyphicon-triangle-right")
                        }
                    })
                })

                $('.w-uplg-rd strong').click(function () {
                    $('.w-uplg-rd ul').slideToggle(function () {
                        if ($('.w-uplg-rd strong').next().hasClass("glyphicon-triangle-right")) {
                            $('.w-uplg-rd strong').next().removeClass("glyphicon-triangle-right")
                            $('.w-uplg-rd strong').next().addClass("glyphicon-triangle-bottom")
                        } else if ($('.w-uplg-rd strong').next().hasClass("glyphicon-triangle-bottom")) {
                            $('.w-uplg-rd strong').next().removeClass("glyphicon-triangle-bottom")
                            $('.w-uplg-rd strong').next().addClass("glyphicon-triangle-right")
                        }
                    })
                })
				
				
				
				// 目录切换
                $("#cover").click(function(){
				    let name = $(this).attr("id");
					$('#oc-content .'+name).hide()
                    $('#oc-content').load('./content/oc-pages/cover.html')
				})
				$("#about-p1").click(function(){
				    let name = $(this).attr("id");
					$('#oc-content .'+name).hide()
                    $('#oc-content').load('./content/oc-pages/about-p1.html')
				})

                $("#about-p2").click(function(){
				    let name = $(this).attr("id");
					$('#oc-content .'+name).hide()
                    $('#oc-content').load('./content/oc-pages/about-p2.html')
				})
                $("#about-p3").click(function(){
				    let name = $(this).attr("id");
					$('#oc-content .'+name).hide()
                    $('#oc-content').load('./content/oc-pages/about-p3.html')
				})
				

            })
        })

    });
    // 加载主体
    $('#wcontent').load('./content/start.html');
    // 加载页尾
    $('#wfooter').load('footer.html');
})
