import React from "react";
import { TemplateState } from "../app/features/template/templateSlice";

export default React.createContext<TemplateState | undefined>(undefined);
