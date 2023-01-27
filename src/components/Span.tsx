import React from 'react';

export default function Span({children}) {
    return (
        <span className="text-red-700 cursor-pointer font-extrabold italic" onClick={() => alert("Hey, don't move, or I'll shoot!")}>{children}</span>
    );
}
