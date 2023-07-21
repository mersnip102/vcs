import { ReportNode } from "../models/ReportNode.model";
import * as _ from "lodash";
import { TT01DataDTO } from "../models/tt01DTO/tt01DataDto.model";
import { TT01DataExport } from "../models/tt01DTO/tt01DataExport.model";

export const EMPTY = '';
export const COLOR_BTN_CANCEL = '#ffdfd8';
export const COLOR_BTN_CONFIRM = '#008bd4';
export const TEXT_BTN_CANCEL = 'No';
export const TEXT_BTN_CONFIRM = 'Yes';
export const PREFIX_MESSAGE = '';
export const TITLE_MSG_ERROR = 'ERROR';
export const TITLE_MSG_SUCCESS = 'SUCCESS';
export enum TypeIcon {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Question = 'question',
  Success = 'success',
}
export const TOKEN = 'TOKEN';
// export enum RoleNumber {
//   user1,
//   user2,
//   // admissions,
//   // admissionsManager
// }

// export enum RoleNumber {
//   BC,
//   XEMBC,
//   DUYETBC,
//   ADMIN
//   // admissionsManager
// }

export const RoleNumber: any = [{ name: 'Nhóm xem báo cáo', value: 0 },
{ name: 'XEMBC', value: 1 },
{ name: 'DUYETBC', value: 2 },
{ name: 'Admin', value: 3 }]



export const CURRENT_USER = 'currentUser';
export const SECRET_KEY = 'PAKN_CAT@2023$';



export function detailChild(nodes: any[], temp: TT01DataDTO[]): TT01DataExport[] {
  let dataChart: any[] = [];

  nodes = nodes.map(node => ({ name: node.toString() }));

  nodes = nodes.filter(node => node.name !== '');
 

  let projectMap: any = _.groupBy(nodes, (node: ReportNode) => node.name.split('.')[0]);

  let detailLeavesMap: any = _.reduce(projectMap, (result: { [project: string]: ReportNode[] }, nodes: ReportNode[], project: string) => {


    const detailLeaves = _.filter(nodes, (node: ReportNode) => !_.some(nodes, (childNode: ReportNode) => childNode.name.startsWith(node.name + '.')));
    result[project] = detailLeaves;
    return result;
  }, {});

  for (const [key, value] of Object.entries(detailLeavesMap)) {

    detailLeavesMap[key].map((item: any) => {

      temp.map((item2: any) => {

        if (item.name === item2._nsTT) {
          item2._nsTTDuAn = item2._nsTT.split('.')[0]
          temp.filter((item3: any) => {
            if (item3.nsTT === item2._nsTTDuAn) {

              item2._nsChiSoDuAn = item3.nsChiSo

            }
          })

          if (item2.mnSoLieuTH !== null) {
           
            dataChart.push(new TT01DataExport(
              item2._nsMS,
              item2._nsTT,
              item2._nsChiSo,
              item2._nsDVT,
              item2._nsPhanTo,
              item2._nsDB,
              item2._mnSoLieuTH,
              item2._mnSoLieuLuyKe,
              item2._mnChiTieuKHNamBC,
              item2._mnTyLeKHNam,
              item2._mnLuyKeThucHien,
              item2._mnChiTieuKHNamGD,
              item2._mnTyLeThucHienGiaiDoan,
              item2._ntGhiChu,
              item2._nsTTDuAn,
              item2._nsChiSoDuAn

            ))
            // dataChart.push(item2)
          }

        }
      }
      )

    })

    // detail.key.map((item: any) => {
    //   temp.map((item2: any) => {
    //     if (item === item2.nsTT) {
    //       a.push(item2)
    //     }
    //   }
    //   )

    // }
    // )
  }

  return dataChart;

}

