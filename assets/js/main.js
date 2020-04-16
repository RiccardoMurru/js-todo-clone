$(document).ready(function () {

    /**
     *  Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
     *  Usiamo i template in html e il clone per separare la parte logica (JS) dalla parte di markup (HTML)
     *  recap funzionalità: mostrare, aggiungere e eliminare elementi dalla lista
     */



    // referenze
    var todoList = [
        'fare la spesa',
        'andare al cinema'
    ];
    var input = $('.app input');
    

    // inserire item array in lista
    for (var i = 0; i < todoList.length; i++) {

        var todoItem = $('.templates li').clone();
        todoItem.prepend(todoList[i]);
        $('.todo').append(todoItem);

    }


    // inserire item lista da campo input
    input.keyup( function(event) {
        
        if (event.which == 13) {
            var newItem = $('.templates li').clone();
            newItem.prepend(input.val());
            $('.todo').append(newItem);
            input.val('');
        }
    });


    
    // rimuovere item al clic su icona
    $('.app').on('click', '.todo li i', function() {
        $(this).parent().remove();
    });



// end doc ready 
});