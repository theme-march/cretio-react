export interface SplitResult {
    words: HTMLElement[];
    chars: HTMLElement[];
}

export function splitText(element: HTMLElement, type: string = "chars"): SplitResult {
    const wordsArray: HTMLElement[] = [];
    const charsArray: HTMLElement[] = [];

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

    return { words: wordsArray, chars: charsArray };
}
