module.exports = anagrams = (stringA, stringB) => 
    cleanStr(stringA) === cleanStr(stringB);

const cleanStr = (str) => {
    return str
        .replace(/[\W]/g, '')
        .split("")
        .sort()
        .join("")
};
