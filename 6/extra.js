const regex = /((?:[A-Z]|\_)+)(?: )?([A-Za-z]+)?(?: )?((?:\d|-)+)?(,(?:\d+|-)+)*/gmi;
const str = `ADD Ivan 555-10-01,555-10-03
ADD Ivan 555-10-01,555-10-03
ADD Ivan 555-10-02
ADD Ivan 555-10-02
SHOW
SHOW
REMOVE_PHONE 555-10-03
REMOVE_PHONE 555-10-03
ADD Alex 555-20-01
ADD Alex 555-20-01
SHOW
`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}