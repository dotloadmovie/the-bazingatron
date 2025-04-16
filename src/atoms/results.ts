import {atomWithStorage, createJSONStorage} from 'jotai/utils';

const storage = createJSONStorage(() => sessionStorage);
//quick and dirty - avoid shallow equality checking
const results = atomWithStorage('results', JSON.stringify({player1: 0, player2: 0}), storage);

export {results}
