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
            const tokens = text.match(/(\s+|\S+)/g) || [];

            tokens.forEach((token) => {
                if (/^\s+$/.test(token)) {
                    fragment.appendChild(document.createTextNode(token));
                } else {
                    const wordWrapper = document.createElement("div");
                    wordWrapper.className = "split-word-wrapper";
                    wordWrapper.style.display = "inline-block";

                    const wordInner = document.createElement("div");
                    wordInner.className = "split-word";
                    wordInner.style.display = "inline-block";

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
            if (
                el.classList.contains("split-word-wrapper") ||
                el.classList.contains("no-split") ||
                el.tagName === "BR" ||
                el.tagName === "SCRIPT" ||
                el.tagName === "STYLE"
            ) {
                return;
            }
            Array.from(node.childNodes).forEach(processNode);
        }
    }

    const hasSplitChars = element.querySelector(".split-char") !== null;
    const hasSplitWords = element.querySelector(".split-word") !== null;

    if (!element.classList.contains("is-split") || (!hasSplitChars && !hasSplitWords)) {
        element.classList.remove("is-split");
        Array.from(element.childNodes).forEach(processNode);
        element.classList.add("is-split");
    } else {
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

    const wrappersWithTops = wordWrappers.map((wrapper) => ({
        wrapper,
        top: Math.round(wrapper.getBoundingClientRect().top),
    }));
    const lineGroups: HTMLElement[][] = [];
    let currentTop: number | null = null;
    let currentGroup: HTMLElement[] = [];

    wrappersWithTops.forEach(({ wrapper, top }) => {
        if (currentTop === null) {
            currentTop = top;
        }
        if (Math.abs(top - currentTop) <= threshold) {
            currentGroup.push(wrapper);
        } else {
            lineGroups.push(currentGroup);
            currentGroup = [wrapper];
            currentTop = top;
        }
    });
    if (currentGroup.length) lineGroups.push(currentGroup);

    lineGroups.forEach((group) => {
        if (!group.length) return;

        const lineWrapper = document.createElement("span");
        lineWrapper.className = "split-line";
        lineWrapper.style.display = "block";
        lineWrapper.style.overflow = "hidden";
        lineWrapper.style.lineHeight = "inherit";
        lineWrapper.style.width = "100%";

        const firstWord = group[0];
        const lastWord = group[group.length - 1];

        const getDirectChild = (node: Node): ChildNode | null => {
            let n = node;
            while (n.parentNode && n.parentNode !== element) {
                n = n.parentNode;
            }
            return n.parentNode === element ? (n as ChildNode) : null;
        };

        const firstAncestor = getDirectChild(firstWord);
        const lastAncestor = getDirectChild(lastWord);

        if (!firstAncestor || !lastAncestor) return;

        const children = Array.from(element.childNodes);
        const startIdx = children.indexOf(firstAncestor);
        const endIdx = children.indexOf(lastAncestor);

        if (startIdx === -1 || endIdx === -1 || startIdx > endIdx) return;

        const nodesToMove = children.slice(startIdx, endIdx + 1);

        element.insertBefore(lineWrapper, firstAncestor);
        nodesToMove.forEach((n) => lineWrapper.appendChild(n));

        lineElements.push(lineWrapper);
    });

    return lineElements;
}
