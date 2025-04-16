import {atomWithStorage, createJSONStorage} from 'jotai/utils';

const storage = createJSONStorage(() => sessionStorage);
const usernameAtom = atomWithStorage('username', '', storage);

export {usernameAtom}
