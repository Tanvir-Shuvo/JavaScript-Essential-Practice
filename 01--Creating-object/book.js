/**
 * creating the book object
 */

const book = {
    bookName: 'javascript for begineers',
    authorName: 'Tanvir Shuvo',
    totalPage: 200,
    practiceModule: 10,
    collect: {
        softCopy: {
            available: true,
            discount: '50%',
        },
        hardCopy: {
            available: true,
            discount: '20%',
        },
    },
    ISBN: 100263745,
    publisher: 'Omega-press',
    downloadLink: 'tanvirshuvo.com/shop/js',
};

console.log('The book Object:', book);
console.log('The book object softcopy details:', book.collect.softCopy);
console.log('The book object softcopy details:', book.collect.softCopy.discount);
