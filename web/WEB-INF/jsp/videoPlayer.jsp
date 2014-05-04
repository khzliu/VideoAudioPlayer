<%-- 
    Document   : videoPlayer
    Created on : 2014-4-18, 15:29:53
    Author     : liu.huazhou <khzliu@163.com>
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title>视频</title>
        <script src="<c:url value="/public/js/video.js"/>"></script>
        <script src="<c:url value="/public/js/jquery-1.9.1.min.js"/>"></script>
        <script src="<c:url value="/public/js/jquery.mobile-1.3.2.js"/>"></script>
        <script src="<c:url value="/public/js/menu.js"/>"></script>
        <script src="<c:url value="/public/js/videoUIControler.js"/>"></script>
        <script src="<c:url value="/public/js/videojs-playlists.js"/>"></script>
        <script>
          videojs.options.flash.swf = "<c:url value="/public/js/video-js.swf"/>";
        </script>
        <link rel="stylesheet" href="<c:url value="/public/css/video-js.css" />" >
        <link rel="stylesheet" href="<c:url value="/public/css/jquery.mobile-1.3.2.min.css" />" >
        <link rel="stylesheet" href="<c:url value="/public/css/menu.css" />" >
        <link rel="stylesheet" href="<c:url value="/public/css/videoUI.css" />" >
    </head>
<script>
        viewModel = <%= request.getParameter("viewType")%>;
        type = '<%= request.getParameter("type")%>';
</script>
    <body>
        <div data-role="page" data-theme="a">
            <div id="header" data-role="header" data-position="fixed" data-tap-toggle="false">
                <h1><%= request.getParameter("type")%></h1>
                <a href="/vehicle/index.html" data-icon="home" rel="external" data-role="button" class="ui-btn-left">首页</a>
            </div>
<!--              start -->
            <div id="ad" class="video-js vjs-default-skin">
                    <span id="timer" >距离广告结束还有 3 秒</span> 
                    <img id="adimg" class="video-js" style="width: 100%;" src="<c:url value="data/images/ad/video_ad.png" />">
            </div>
<!--             end -->
            <video id="video_1" class="video-js vjs-default-skin" controls preload="auto" width="100%" height="240">
            </video>
            
            <div data-role="content"> 
                <div data-role="popup" id="popupBasic"><p>赞+1</p></div>
                <a href="#popupBasic" id="popIcon" data-rel="popup" data-transition="slidedown" data-position-to="window" data-transition="pop"></a>
                <span id="priaseNum" class="ui-li-aside" >0</span>
            </div>
            <div data-role="content" >
                <ul data-role="listview" data-inset="true" data-icon="false" data-theme="a" data-count-theme="b" id="ul_info">
                    
                </ul>
                <a href="#" id="more" data-role="button" data-theme="a">更多...</a>
            </div>
                
        </div>   
    </body>
</html>
