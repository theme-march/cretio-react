import React from "react";

interface SafeHTMLProps {
  html: string;
}
export const SafeHTML: React.FC<SafeHTMLProps> = ({ html }) => {
  if (!html) return null;

  const parts = html.split(/(<br\s*\/?>|<\/?b>|<\/?i>|<span[^>]*>|<\/span>)/gi);

  return (
    <>
      {parts.map((part, index) => {
        const lowerPart = part.toLowerCase();
        
        if (lowerPart.startsWith("<br")) {
          return <br key={index} />;
        }
        
        if (lowerPart === "<b>" || lowerPart === "</b>" || lowerPart === "<i>" || lowerPart === "</i>") {
            return null;
        }

        if (lowerPart.startsWith("<span")) {
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

export const SafeText: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    
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

export const CretioText: React.FC<{ text: string }> = ({ text }) => {
    if (!text) return null;
    
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
