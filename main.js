$(document).ready(function() {

    $('#form-tarefa').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val().trim();
        if(novaTarefa) {
            const novoItem = $('<li></li>');
            const textoTarefa = $('<span></span>').text(novaTarefa);
            const botaoExcluir = $('<button class="excluir-tarefa">Excluir</button>');

            textoTarefa.click(function(){
                $(this).toggleClass('completed');
            });

            botaoExcluir.click(function(e) {
                e.stopPropagation();
                $(this).parent().remove();
            });

            novoItem.append(textoTarefa).append(botaoExcluir);
            $('#lista-tarefa').append(novoItem);

            $('#nova-tarefa').val('');
        }
    });

    $('#btn-excluir').click(function() {
        $('#tarefa-form')[0].reset();
    })
});