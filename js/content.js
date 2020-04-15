setTimeout(() => {
    /*
    var el = $('._3H4MS span[title="Grupo para test do bot"]').closest('.X7YrQ');
    console.log(el[0]);
    simulate(el[0], 'click');
    console.log("clicou");
    */
    var objDiv = document.querySelector('#pane-side');
    objDiv.scrollTop = objDiv.scrollHeight;

    setTimeout(() => {
        objDiv.scrollTop = 0;
        startApp();
    }, 2000);

}, 10000);

function startApp(){
    setTimeout(() => {
        //console.log(document.querySelector('._3NWy8 span[title="Grupo para test do bot"]').closest('.X7YrQ'));
        var el = document.querySelector('._3NWy8 span[title="Grupo para test do bot"]').closest('._2UaNq');
        // simulateMouseEvents(document.querySelector('div[title="Nova conversa"]'), 'mousedown');
        clk(el, 'mousedown');
    }, 3000);
}

function clk(element, eventName) {
    var mouseEvent= document.createEvent ('MouseEvents');
    mouseEvent.initEvent (eventName, true, true);
    element.dispatchEvent (mouseEvent);
}
