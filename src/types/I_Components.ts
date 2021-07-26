import { ReactNode } from "react";
export namespace I_Components {
  export interface I_PaginationTypes {
    pageCount: number;
    onPageChange: any;
  }

  export interface I_TabPanel {
    children: ReactNode;
    value: string | number | null;
    index: number;
    other?: unknown;
  }
}
