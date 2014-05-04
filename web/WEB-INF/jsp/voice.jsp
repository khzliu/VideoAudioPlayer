<%-- 
    Document   : voice_index
    Created on : 2014-3-25, 15:39:58
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
        <link rel="stylesheet" href="<c:url value="/public/css/jquery.mobile-1.3.2.min.css"/>">
        <link rel="stylesheet" href="<c:url value="/public/css/flexslider.css"/>" type="text/css">
        <link rel="stylesheet" href="<c:url value="/public/css/grid-listview.css"/>" type="text/css">
        
        <script src="<c:url value="/public/js/jquery-1.9.1.min.js"/>"></script>
        <script src="<c:url value="/public/js/jquery.mobile-1.3.2.min.js"/>"></script>
        <script src="<c:url value="/public/js/jquery.flexslider.js"/>"></script>    
    </head>
    <script type="text/javascript" charset="utf-8">
	$(window).load(function() {
		$('.flexslider').flexslider();
	});
    </script>
    <body>
        <div data-role="page" data-theme="a" >
            <div id="header" data-role="header" data-position="fixed" data-tap-toggle="false">
                <h1 style="color:white;">悦听</h1>
                <a href="/vehicle/index.html" data-icon="home" rel="external" data-role="button" class="ui-btn-left">首页</a>
            </div>
            
            <div data-role="content" class="my-page">
                <div class="flexslider">
                    <ul class="slides">
                        <li><img src="<c:url value="/data/images/post/home_ad_1.jpg"/>" /></li>
                        <li><img src="<c:url value="/data/images/post/home_ad_2.jpg"/>" /></li>
                        <li><img src="<c:url value="/data/images/post/home_ad_3.jpg"/>" /></li>
                    </ul>
		</div>
                <ul data-role="listview" data-inset="true">
                    <c:forEach var="voicetype" items="${typeList}" varStatus="index">
                        <li><a href="<c:url value="/voiceplayer.html?type=${voicetype.typeName}&viewType=${voicetype.viewMode}" />" rel="external"> <img
                            src="<c:url value="/data/悦听/${voicetype.typeName}/icon.jpg"/>">
                                <h1><span style="float:left">${voicetype.typeName}</span><span style="float:right;font-size: 12px">共${voicetype.fileNum}部</span></h1>
                        </a></li>
                     </c:forEach>
                </ul>
            </div>
        </div>
    </body>
</html>