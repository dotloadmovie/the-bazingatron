import {atomWithStorage, createJSONStorage} from 'jotai/utils';

const storage = createJSONStorage(() => sessionStorage);
const username = atomWithStorage('username', 'User', storage);

export {username}
