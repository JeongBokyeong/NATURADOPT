import list from './list';
export default function sort(list, input) {
    const sorted
    if(input === 'popularity') {
        return list.sort((a, b) => {a.popularity} - {b.popularity});
    } else if(input === 'relavance') {
        return list.sort((a, b) => a.relavance - b.relavance);
    } else if(input === 'likes') {
        return list.sort((a, b) => a.likes - b.likes);
    }
}
