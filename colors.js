var Links = {
    setColor:function(color){
        // var i = 0;
        // var alist = document.querySelectorAll('a');
        // while(i < alist.length){
        // alist[i].style.color =color;
        // i = i + 1;
        // }
        //일괄 주석 처리 '/ctrl + /'
        // '$' JQuery 표시 
        $('a').css('color', color);
    }
}

var Body = {
    setBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color); 
    },
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
    }
} 

function nightDayHandler(self) {
var target=document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        
        
        Links.setColor('white');
        
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';    

        Links.setColor('black');
    }
}
