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
        <title>悦听</title>
        <script src="<c:url value="/public/js/jquery-1.9.1.min.js"/>"></script>
        <script src="<c:url value="/public/js/jquery.mobile-1.3.2.js"/>"></script>
        <script src="<c:url value="/public/js/menu.js"/>"></script>
        <script src="<c:url value="/public/js/jquery.jplayer.min.js"/>" type="text/javascript"> </script>
        <script src="<c:url value="/public/js/jplayer.playlist.min.js"/>" type="text/javascript"> </script>
        <script src="<c:url value="/public/js/voiceUIControler.js"/>"></script>
        <link rel="stylesheet" href="<c:url value="/public/css/jquery.mobile-1.3.2.css" />" >
        <link rel="stylesheet" href="<c:url value="/public/css/menu.css" />" >
        <link rel="stylesheet" href="<c:url value="/public/css/jplayer_voice_skin.css" />" >
    </head>
<script>
        viewModel = <%= request.getParameter("viewType")%>;
        type = '<%= request.getParameter("type")%>';
</script>
    <body>
        <div data-role="page" data-theme="a">
            <div data-role="header" data-position="fixed" data-tap-toggle="false">
                <h1><%= request.getParameter("type")%></h1>
                <a href="/vehicle/index.html" data-icon="home" rel="external" data-role="button" class="ui-btn-left">首页</a>
            </div>
            
                
            <div data-role="content" >
                <ul data-role="listview" data-inset="true" data-icon="false" data-theme="a" data-count-theme="b" id="ul_info">
                    
                </ul>
                <a href="#" id="more" data-role="button" data-theme="a">更多...</a>
                
            </div>
            
            <div data-role="footer" data-position="fixed" data-theme="a" data-tap-toggle="false" data-id="footernav">
                    
                    <div id="jp_container_1" class="jp-audio" data-role="footer" data-position="fixed" data-tap-toggle="false">
                        <div id="jquery_jplayer_1" class="jp-jplayer"></div>
                        <div class="jp-type-single">
                        <div class="jp-title">  <!--修改界面，是title靠上显示 modified by khzliu 2014年2月17日10:44:56-->
                            <ul>
                                <li>该栏目无内容...
                                </li>
                            </ul>
                            <div data-role="popup" id="popupBasic"><p>赞+1</p></div>
                            <a href="#popupBasic" id="popIcon" data-rel="popup" data-transition="slidedown" data-position-to="window" data-transition="pop"></a>
                            <span id="priaseNum" class="ui-li-aside" >0</span>
                        </div>
                        <div class="jp-gui jp-interface">
                            <ul class="jp-controls">
                                <li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
                                <li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
                            </ul>
                            <div class="jp-progress">
                                 <div class="jp-seek-bar">
                                     <div class="jp-play-bar"></div>
                                 </div>
                            </div>
                            <div class="jp-time-holder">
                                    <div class="jp-current-time"></div>
                                    <div class="jp-duration"></div>
                            </div>
                        </div>

                        <div class="jp-playlist" style="display: none">
                            <ul>
                            <!-- The method Playlist.displayPlaylist() uses this unordered list -->
                                <li></li>
                            </ul>
                        </div>

                            <div class="jp-no-solution">
                                <span>Update Required</span>
                                    To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                            </div>
                        </div>

                    </div><!--end jp_container_1-->
               </div>
                
            </div> 
    </body>
</html>
