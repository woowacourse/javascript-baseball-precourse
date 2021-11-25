export const resultElement = count => {
    const $result = document.createElement('div');
    $result.id = "result";
    const textNode = document.createTextNode(count);
    $result.appendChild(textNode);
    
    return $result;
}