import { TT01DataDTO } from "src/app/models/tt01DTO/tt01DataDto.model";
import { TT01DataExport } from "src/app/models/tt01DTO/tt01DataExport.model";
import { detailChild } from "../../utilities";

export function getTT01DataExport(nodes: any[], temp: TT01DataDTO[]): any[] {
   let dataExport: TT01DataExport[] = detailChild(nodes, temp);
   return dataExport
    
  }