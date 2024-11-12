const sleepSvg = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

    <circle cx="50" cy="50" r="45" fill="#1a1a1a"/>
    
    <path d="M30 45 Q40 45, 50 45" stroke="#3498db" stroke-width="3" fill="none"/>
    <path d="M50 45 Q60 45, 70 45" stroke="#3498db" stroke-width="3" fill="none"/>
    
    <circle cx="75" cy="25" r="8" fill="#e74c3c" opacity="0.8">
        <animate attributeName="r" 
                 values="8;10;8" 
                 dur="2s" 
                 repeatCount="indefinite"/>
    </circle>
    
    <text x="65" y="20" fill="#3498db" font-size="12" font-weight="bold">
        Z
        <animate attributeName="opacity"
                 values="0;1;0"
                 dur="3s"
                 repeatCount="indefinite"/>
    </text>
    <text x="72" y="15" fill="#3498db" font-size="10" font-weight="bold">
        Z
        <animate attributeName="opacity"
                 values="0;1;0"
                 dur="3s"
                 begin="1s"
                 repeatCount="indefinite"/>
    </text>
</svg>`