https://leetcode.com/problems/text-justification/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let line = [];
    let lineLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (lineLength + line.length + word.length <= maxWidth) {
            line.push(word);
            lineLength += word.length;
        } else {
            result.push(justifyLine(line, maxWidth, false, lineLength));
            line = [word];
            lineLength = word.length;
        }
    }

    result.push(justifyLine(line, maxWidth, true, lineLength));

    return result;
};

function justifyLine(line, maxWidth, isLastLine, lineLength) {
    const spacesCount = line.length - 1;
    const totalSpaces = maxWidth - lineLength;
    
    let result = line[0];

    if (line.length === 1 || isLastLine) {
        for (let i = 1; i < line.length; i++) {
            result += ' ' + line[i];
        }
        result += ' '.repeat(maxWidth - result.length);
        return result;
    }

    const spaceWidth = Math.floor(totalSpaces / spacesCount);
    const extraSpaces = totalSpaces % spacesCount;

    for (let i = 1; i < line.length; i++) {
        const spaces = i <= extraSpaces ? spaceWidth + 1 : spaceWidth;
        result += ' '.repeat(spaces) + line[i];
    }

    return result;
}
