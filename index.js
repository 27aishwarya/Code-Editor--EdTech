const codeElement = document.getElementById('code');
const runButton = document.getElementById('run-button');
const outputFrame = document.getElementById('output');

runButton.addEventListener('click', () => {
    const code = codeElement.textContent;
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(`<script>${code}</script>`)
outputFrame.contentDocument.close();
});