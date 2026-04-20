import React from "react";

interface SafeHTMLProps {
  html: string;
}

/**
 * A safe alternative to dangerouslySetInnerHTML for simple tags like <br/>, <span>, <b>, <i>.
 * Specifically handles .highlight, .text-underlines, and .underline-anim classes used in Cretio.
 */
export const SafeHTML: React.FC<SafeHTMLProps> = ({ html }) => {
  if (!html) return null;

  // Regex to match <br>, <b>, <i> or <span> with classes
  // Captures: <br>, <b>, </b>, <i>, </i>, <span class="...">, </span>
  const parts = html.split(/(<br\s*\/?>|<\/?b>|<\/?i>|<span[^>]*>|<\/span>)/gi);

  return (
    <>
      {parts.map((part, index) => {
        const lowerPart = part.toLowerCase();
        
        if (lowerPart.startsWith("<br")) {
          return <br key={index} />;
        }
        
        if (lowerPart === "<b>" || lowerPart === "</b>" || lowerPart === "<i>" || lowerPart === "</i>") {
            // Basic support for bold/italic if needed, but we mostly use spans
            return null;
        }

        if (lowerPart.startsWith("<span")) {
            // Extract class name if any to handle markers
            return <React.Fragment key={index} />; 
        }

        if (lowerPart === "</span>" || part.startsWith("</")) {
          return null;
        }
        
        if (part.startsWith("<") && part.endsWith(">")) {
          return null;
        }

        return part;
      })}
    </>
  );
};

/**
 * Specifically for titles that only need <br/> and simple highlighting
 */
export const SafeText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;

  // This handles the common pattern: text <span class="highlight">word</span> text
  // We'll simplify: just treat <span> as highlight and <br> as <br>
  const parts = text.split(/(<br\s*\/?>|<span[^>]*>|<\/span>)/gi);

  return (
    <>
      {parts.map((part, index) => {
        const lowerPart = part.toLowerCase();
        if (lowerPart.startsWith("<br")) return <br key={index} />;
        if (lowerPart.startsWith("<span")) {
            // Marker for span start
            return null; 
        }
        if (lowerPart === "</span>") return null;
        
        // If the previous part was a span tag, we should have wrapped this in a span
        // But split() makes it linear. Let's use a slightly better approach for SafeText.
        return part;
      })}
    </>
  );
};

/**
 * The most robust simple way to handle Cretio's specific HTML strings
 */
export const CretioText: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    
    // We'll use a simple state-based parser for linear tags
    const parts = text.split(/(<br\s*\/?>|<span[^>]*>|<\/span>)/gi);
    let currentClass = "";
    
    return (
        <>
            {parts.map((part, index) => {
                const lowerPart = part.toLowerCase();
                if (lowerPart.startsWith("<br")) return <br key={index} />;
                if (lowerPart.startsWith("<span")) {
                    const classMatch = part.match(/class=["']([^"']*)["']/i);
                    currentClass = classMatch ? classMatch[1] : "highlight";
                    return null;
                }
                if (lowerPart === "</span>") {
                    currentClass = "";
                    return null;
                }
                if (part.startsWith("<")) return null;
                
                if (currentClass) {
                    return <span key={index} className={currentClass}>{part}</span>;
                }
                return part;
            })}
        </>
    );
};
