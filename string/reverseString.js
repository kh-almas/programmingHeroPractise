function reverseString(content)
{
    let reversed = '';
    for(i = content.length; i >= 0; i--)
    {
        const element = content[i];
        reversed = reversed + element;
    }
    return reversed;
}

const text = 'Add a README with an overview of your project.';
let finalText = reverseString(text);
console.log(finalText);
