import { ReportNode } from "../models/ReportNode.model";
import * as _ from "lodash";

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

export const RoleNumber: any = [ {name: 'Nhóm xem báo cáo', value: 0},
{name: 'XEMBC', value: 1},
{name: 'DUYETBC', value: 2},
{name: 'Admin', value: 3}]



export const CURRENT_USER = 'currentUser';
export const SECRET_KEY = 'PAKN_CAT@2023$';



export function detailChild(nodes: any[]): any {
 
nodes = nodes.map(node => ({ name: node.toString() }));

  let projectMap: any = _.groupBy(nodes, (node: ReportNode) => node.name.split('.')[0]);

let detailLeavesMap: any = _.reduce(projectMap, (result: { [project: string]: ReportNode[] }, nodes: ReportNode[], project: string) => {


const detailLeaves = _.filter(nodes, (node: ReportNode) => !_.some(nodes, (childNode: ReportNode) => childNode.name.startsWith(node.name + '.')));
result[project] = detailLeaves;
return result;
},{});

return detailLeavesMap;

}

