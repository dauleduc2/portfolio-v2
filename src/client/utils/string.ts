function breakTextIntoLines(text: string, threshold: number = 74): string {
    const words: string[] = text.split(' ')
    const lines: string[] = []
    let currentLine: string[] = []

    let wordCount = 0
    let lineLength = 0

    for (const word of words) {
        if (lineLength + word.length <= threshold) {
            // Adjust the limit based on your requirement
            currentLine.push(word)
            lineLength += word.length + 1 // +1 for the space
            wordCount += 1
        } else {
            lines.push(currentLine.join(' '))
            currentLine = [word]
            lineLength = word.length + 1
            wordCount = 1
        }
    }

    if (wordCount > 0) {
        lines.push(currentLine.join(' '))
    }

    return lines.join('\n')
}

export { breakTextIntoLines }
