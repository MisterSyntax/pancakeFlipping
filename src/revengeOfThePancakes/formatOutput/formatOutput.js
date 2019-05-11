export default function formatOutput(results) {
    return results.reduce((resultString, curr, i) => {
        return (
            `
${resultString}
Case #${i+1}: ${curr}
`.trim()
        );
    }, '');
}
