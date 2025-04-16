type value = 'lizard'|'paper'|'rock'|'scissors'|'spock';



const data:any = {
    lizard: {wins: {
        paper: "Eats paper",
        spock: "Poisons Spock"
    }},
    paper: {wins: {
        rock: "Wraps rock",
        spock: "Disproves Spock"
    }},
    rock: {
        wins: {
            scissors: "Smashes scissors",
            lizard: "Crushes lizard"
        }
    },
    scissors:{
        wins: {
            paper: "Cuts paper",
            lizard: "Decapitates lizard"
        }
    },
    spock: {
        wins: {
            scissors: "Smashes scissors",
            rock: "Vaporizes rock"
        }
    },
}

export const compare = (player1:value, player2:value) => {
    if(player1 === player2) {
        return {
            winner: 'draw',
            reason: 'draw'
        }
    }

    return data[player1].wins[player2]? 
    {winner: 'player1', value:player1, reason: data[player1].wins[player2]} 
    : 
    {winner: 'player2', value:player2, reason: data[player2].wins[player1]}
}