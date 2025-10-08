import { ReactNode } from "react";

export interface TooltipProps{
    children?:ReactNode
    toolTipTitle:string
    toolTipDescription:string
    closeToolTip?:()=>void
}