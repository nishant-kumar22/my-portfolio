import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function HighlightedText({ text, highlights = [] }) {
  const renderHighlightedText = () => {
    let parts = [{ text, id: uuidv4(), isHighlight: false }];
    
    highlights.forEach(({ text: highlightText, color }) => {
      parts = parts.flatMap(part => {
        if (part.isHighlight || typeof part.text !== 'string') return part;
        
        const regex = new RegExp(`(${highlightText})`, 'gi');
        const segments = part.text.split(regex);
        
        return segments.map((segment) => {
          if (segment.toLowerCase() === highlightText.toLowerCase()) {
            return {
              text: segment,
              id: uuidv4(),
              isHighlight: true,
              color
            };
          }
          return {
            text: segment,
            id: uuidv4(),
            isHighlight: false
          };
        }).filter(segment => segment.text !== '');
      });
    });
    
    return parts.map(part => {
      if (part.isHighlight) {
        return (
          <span key={part.id} className={`text-${part.color} font-semibold`}>
            {part.text}
          </span>
        );
      }
      return <span key={part.id}>{part.text}</span>;
    });
  };

  return <>{renderHighlightedText()}</>;
}

export default HighlightedText;