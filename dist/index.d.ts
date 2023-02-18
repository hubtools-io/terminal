import * as React from "react";
import { TerminalContextProvider as _TerminalContextProvider } from "./contexts/TerminalContext";
export declare function ReactTerminal(props: any): JSX.Element;
export declare const TerminalContextProvider: typeof _TerminalContextProvider;
export declare const TerminalContext: React.Context<import("./contexts/TerminalContext").TerminalShell>;
declare const _default: {
    ReactTerminal: typeof ReactTerminal;
    TerminalContextProvider: typeof _TerminalContextProvider;
    TerminalContext: React.Context<import("./contexts/TerminalContext").TerminalShell>;
};
export default _default;
