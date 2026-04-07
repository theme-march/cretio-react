export interface SplitResult {
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];
}

export function splitText(element: HTMLElement, type: string = "chars"): SplitResult {
    const wordsArray: HTMLElement[] = [];
    const charsArray: HTMLElement[] = [];
    const linesArray: HTMLElement[] = [];
    const shouldSplitLines = type.includes("lines");

    function processNode(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.nodeValue;
            if (!text || text.trim() === "") return;

            const fragment = document.createDocumentFragment();
            // Match whitespace or non-whitespace sequences
            const tokens = text.match(/(\s+|\S+)/g) || [];

            tokens.forEach((token) => {
                if (/^\s+$/.test(token)) {
                    // It's just whitespace, keep it as text node to preserve spacing
                    fragment.appendChild(document.createTextNode(token));
                } else {
                    // It's a word
                    const wordWrapper = document.createElement("div");
                    wordWrapper.className = "split-word-wrapper";
                    wordWrapper.style.display = "inline-block";

                    const wordInner = document.createElement("div");
                    wordInner.className = "split-word";
                    wordInner.style.display = "inline-block";
                    // GSAP will animate this

                    if (type === "chars" || type.includes("chars")) {
                        const chars = token.split("");
                        chars.forEach((char) => {
                            const charWrapper = document.createElement("div");
                            charWrapper.className = "split-char-wrapper";
                            charWrapper.style.display = "inline-block";

                            const charInner = document.createElement("div");
                            charInner.className = "split-char";
                            charInner.style.display = "inline-block";
                            charInner.textContent = char;

                            charsArray.push(charInner);
                            charWrapper.appendChild(charInner);
                            wordInner.appendChild(charWrapper);
                        });
                    } else {
                        wordInner.textContent = token;
                    }

                    wordsArray.push(wordInner);
                    wordWrapper.appendChild(wordInner);
                    fragment.appendChild(wordWrapper);
                }
            });

            node.parentNode?.replaceChild(fragment, node);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            // Avoid double splitting or splitting elements that should remain intact
            if (
                el.classList.contains("split-word-wrapper") || 
                el.classList.contains("no-split") ||
                el.tagName === "BR" || 
                el.tagName === "SCRIPT" || 
                el.tagName === "STYLE"
            ) {
                return;
            }
            // recursively process children
            Array.from(node.childNodes).forEach(processNode);
        }
    }

    if (!element.classList.contains("is-split")) {
        Array.from(element.childNodes).forEach(processNode);
        element.classList.add("is-split");
    } else {
        // Collect existing
        element.querySelectorAll(".split-word").forEach(el => wordsArray.push(el as HTMLElement));
        element.querySelectorAll(".split-char").forEach(el => charsArray.push(el as HTMLElement));
    }

    if (shouldSplitLines) {
        const existingLines = element.querySelectorAll<HTMLElement>(".split-line");
        if (existingLines.length) {
            existingLines.forEach((line) => linesArray.push(line));
        } else {
            linesArray.push(...wrapLines(element));
        }
    }

    return { words: wordsArray, chars: charsArray, lines: linesArray };
}

function wrapLines(element: HTMLElement): HTMLElement[] {
    const lineElements: HTMLElement[] = [];
    const wordWrappers = Array.from(element.querySelectorAll<HTMLElement>(".split-word-wrapper"));

    if (!wordWrappers.length) return lineElements;

    const threshold = 4;
    let currentTop: number | null = null;
    let currentLine: HTMLElement[] = [];

    const flushLine = () => {
        if (!currentLine.length) return;
        const range = document.createRange();
        range.setStartBefore(currentLine[0]);
        range.setEndAfter(currentLine[currentLine.length - 1]);

        const lineWrapper = document.createElement("span");
        lineWrapper.className = "split-line";
        lineWrapper.style.display = "block";
        lineWrapper.style.overflow = "hidden";
        lineWrapper.style.lineHeight = "inherit";
        lineWrapper.style.width = "100%";

        range.surroundContents(lineWrapper);
        range.detach();
        lineElements.push(lineWrapper);
        currentLine = [];
    };

    wordWrappers.forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const top = Math.round(rect.top);

        if (currentTop === null) {
            currentTop = top;
        }

        if (Math.abs(top - currentTop) <= threshold) {
            currentLine.push(wrapper);
        } else {
            flushLine();
            currentTop = top;
            currentLine.push(wrapper);
        }
    });

    flushLine();

    return lineElements;
}
