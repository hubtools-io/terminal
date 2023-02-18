import * as React from "react";
export type TerminalShell = {
    bufferedContent: React.ReactNode;
    temporaryContent: React.ReactNode;
    setBufferedContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    setTemporaryContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    appendCommandToHistory: (command: string) => void;
    getNextCommand: () => string;
    getPreviousCommand: () => string;
};
export declare const TerminalContext: React.Context<TerminalShell>;
export declare function TerminalContextProvider(props: any): JSX.Element;
declare const _default: {
    TerminalContext: React.Context<TerminalShell>;
    TerminalContextProvider: typeof TerminalContextProvider;
};
export default _default;
