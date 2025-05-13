import { ReactNode } from "react";

export interface BannerProps {
  children?: ReactNode;
  variant?: "success" | "error" | "info" | "warn";
  isSingleLine:boolean
  title:string
  subTitle?:string
  className?:string
}