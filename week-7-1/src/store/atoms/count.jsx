import { atom } from 'recoil';
import {selector} from 'recoil';

export const countAtom = atom({
    key: 'countAtom',
    default : 0
})

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2;
        //Anytime the countAtom change it will run this heavy operation again , its depends on countAtom 
    }
})

//Explore Atom family and selector family 