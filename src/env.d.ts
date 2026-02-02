/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly MODE: 'development' | 'production';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '**/*.svg' {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare module '*.svg?url' {
    const src: string;
    export default src;
}

declare module '*.svg?inline' {
    const src: string;
    export default src;
}

declare module '*.woff' {
    const src: string;
    export default src;
}

declare module '*.woff2' {
    const src: string;
    export default src;
}
