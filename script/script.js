let button = document.getElementById('lancio');

button.addEventListener('click', function () {
    const lancio_pc = Math.floor(((Math.random()) * 6) + 1);
    const lancio_player = Math.floor(((Math.random()) * 6) + 1);
    //console.log(lancio_pc, lancio_player);

    const computer_number = document.querySelector('.computer_number');
    const player_number = document.querySelector('.player_number');

    computer_number.innerHTML = lancio_pc;
    player_number.innerHTML = lancio_player;

    const winner = document.querySelector('.winner');
    let winner_name = '';
    if (lancio_pc > lancio_player) {
        winner_name = 'Computer';
    }
    else if (lancio_player > lancio_pc)
        winner_name = 'Giocatore';

    else
        winner_name = 'Pareggio';

    winner.innerHTML = winner_name;

})