$(document).ready(function() {
    initAutoType();

});

var initAutoType = function() {
    var types = ["a Blog.", "Not Just a Blog.", "ZERONE's Blog."];
    var words = $("#first-words");

    var stopType = false; //用于停止自动打字的

    var index = 0;
    var tempWords = "";
    var isNext = false;
    var time = 200;

    var startType = setInterval(function() {
        if (stopType) {
            //如果需要停止打字
            clearInterval(startType);
        }
        if (tempWords.length === 0) {
            //如果删完了，就开始
            if (isNext) {
                index++;
                index = index % 3;
                isNext = false;
            }
            tempWords = types[index].substring(0, tempWords.length + 1);
        } else if (tempWords.length === types[index].length && isNext === false) {
            //如果已经到头了，就要删去
            // tempWords = tempWords.substring(0,tempWords.length-1);
            isNext = true;
            time = 5000;
        } else {
            //如果既没删完也没显示完
            if (isNext) {
                //如果是在减少
                tempWords = tempWords.substring(0, tempWords.length - 1);
                time = 150;
            } else {
                //如果在增多
                time = 200;
                tempWords = types[index].substring(0, tempWords.length + 1);
            }
        }
        words.html("&nbsp;" + tempWords);
    }, time);
};