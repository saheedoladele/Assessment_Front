import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';


const {persistAtom} = recoilPersist()

const authAtom = atom({
  key: 'auth',
  default: null,
  effects_UNSTABLE:[persistAtom]
});

// const userToken = selector({
//     key: 'userToken',
//     get: ({ get }) => {
//       const details = get(authAtom);
//       return details?.token
//     },
//   });
  
  
export { authAtom };