//this is the place where we used to make the code that used several time
//this make our code more redable,testable
//this make our code more maintanab le
import { restrautlist } from '../src/constant'
export function filterlist(searchtext, list) {
    if (searchtext === "") {
        return restrautlist
    }
    else {
        return list.filter((data) => data?.name.toLowerCase().includes(searchtext.toLowerCase()))
    }
}
