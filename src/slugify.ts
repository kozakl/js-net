const sets = {
    'ą': 'a', 'ä': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o', 'ö': 'o',
    'ś': 's',
    'ß': 'ss',
    'ü': 'u',
    'ź': 'z', 'ż': 'z',
    '·': '-', '/': '-', '_': '-', ',': '-', ':': '-', ';': '-'
};

export default function slugify(str:string) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')       // replace spaces with -
        .replace(/./g, (char)=>
            sets[char] || char)   // replace special characters using sets
        .replace(/&/g, '-and-')     // replace & with 'and'
        .replace(/[^\w\-]+/g, '')   // remove all non-word chars
        .replace(/\-\-+/g, '-')     // replace multiple - with single -
        .replace(/^-+/, '')         // trim - from start of text
        .replace(/-+$/, '');        // trim - from end of text
}
