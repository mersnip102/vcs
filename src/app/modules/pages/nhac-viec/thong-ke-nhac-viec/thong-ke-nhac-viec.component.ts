import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
interface DataItem {
  
  stt: string;
  tenLoaiBaoCao: string;
  nguoiBaoCao: string;
  doiTuong: string;
  ngayBaoCao: string;
  trangThai: string;
 
}

interface ColumnItem {
  name: string;
  // sortOrder: NzTableSortOrder | null;
  // sortFn: NzTableSortFn<DataItem> | null;
  // sortDirections: NzTableSortOrder[];
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
 
}
@Component({
  selector: 'app-thong-ke-nhac-viec',
  templateUrl: './thong-ke-nhac-viec.component.html',
  styleUrls: ['./thong-ke-nhac-viec.component.css']
})
export class ThongKeNhacViecComponent {
  listOfColumns: ColumnItem[] = [
    {
      name: 'STT',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: '1', value: '1' },
        { text: '2', value: '2',
        // byDefault: true
      }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.stt.indexOf(name) !== -1)
    },
    {
      name: 'Tên loại báo cáo',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: false,
      listOfFilter: [
        { text: 'Báo cáo tuần', value: 'Báo cáo tuần' },
        { text: '	Báo cáo tháng', value: 'Báo cáo tháng',
        // byDefault: true
      }
      ],
      filterFn: (ten: string, item: DataItem) => item.tenLoaiBaoCao.indexOf(ten) !== -1
    },
    {
      name: 'Người báo cáo',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'baocao', value: 'baocao' },
        { text: 'admin03', value: 'admin03',
        // byDefault: true
      }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.ngayBaoCao.indexOf(name) !== -1)
    },
    {
      name: 'Đối tượng',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: '123', value: '123' },
        { text: 'Tranning', value: 'Tranning',
        // byDefault: true
      }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.doiTuong.indexOf(name) !== -1)
    },
    {
      name: 'Ngày báo cáo',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: '123', value: '123' },
        { text: 'Tranning', value: 'Tranning',
        // byDefault: true
      }
      ],
      filterFn: (ngay: string, item: DataItem) => item.ngayBaoCao.indexOf(ngay) !== -1
    },
    {
      name: 'Trạng thái',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: '123', value: '123' },
        { text: 'Tranning', value: 'Tranning',
        // byDefault: true
      }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.trangThai.indexOf(name) !== -1)
    },
    
  ];


//   <td>
//   1
// </td>
// <td>
//   Báo cáo tuần
// </td>
// <td>
//   baocao
// </td>
// <td>
//   123
// </td>
// <td>
//   12/06/2023
// </td>
// <td>
//   Chưa báo cáo
// </td>

// </tr>
// <tr>
// <td>
//   2
// </td>
// <td>
//   Báo cáo tuần
// </td>
// <td>
//   admin03
// </td>
// <td>
//   Tranning
// </td>
// <td>
//   09/06/2023
// </td>
// <td>
//   Chưa báo cáo
// </td>
  
  listOfData: DataItem[] = [
    {
      stt: "1",
      tenLoaiBaoCao: 'Báo cáo tuần',
      nguoiBaoCao: 'baocao',
      doiTuong: '123',
      ngayBaoCao: '12/06/2023',
      trangThai: 'Chưa báo cáo'

    },
    {
      stt: "2",
      tenLoaiBaoCao: 'Báo cáo tuần',
      nguoiBaoCao: 'admin03',
      doiTuong: 'Tranning',
      ngayBaoCao: '09/06/2023',
      trangThai: 'Chưa báo cáo'

    },
    {
      stt: "3",
      tenLoaiBaoCao: 'Báo cáo tuần',
      nguoiBaoCao: 'admin03',
      doiTuong: 'Tổ',
      ngayBaoCao: '07/02/2023',
      trangThai: 'Đã báo cáo'

    },
   
  ];


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
