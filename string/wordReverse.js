function wordReverse(content)
{
    const words = content.split(' ')
    let finalWords = [];
    for (let i = words.length-1; i >= 0; i--)
    {
        const element = words[i];
        finalWords.push(element);

    }
    let sentence = finalWords.join(' ');
    return sentence;
}

let text = 'Add a README with an overview of your project';
let finalSentence = wordReverse(text);
console.log(finalSentence);