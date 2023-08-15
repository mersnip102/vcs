
// public string nsMS { get; set; }
// public string nsTT { get; set; }
// public string nsChiSo { get; set; }
// public string nsDVT { get; set; }
// public string nsPhanTo { get; set; }
// public string nsDB { get; set; }

// /// <summary>
// /// Số liệu thực hiện trong kỳ báo cáo
// /// </summary>
// public decimal? mnSoLieuTH { get; set; }

// /// <summary>
// /// Số liệu lũy kế từ đầu năm đến thời điểm báo cáo
// /// </summary>
// public decimal? mnSoLieuLuyKe { get; set; }

// /// <summary>
// /// Chỉ tiêu kế hoạch năm báo cáo
// /// </summary>
// public decimal? mnChiTieuKHNamBC { get; set; }

// /// <summary>
// /// Tỷ lệ thực hiện KH năm
// /// </summary>
// public decimal? mnTyLeKHNam { get; set; }

// /// <summary>
// /// Lũy kế thực hiện từ đầu giai đoạn
// /// </summary>
// public decimal? mnLuyKeThucHien { get; set; }

// /// <summary>
// /// Chỉ tiêu kế hoạch cả giai đoạn 2021-2025
// /// </summary>
// public decimal? mnChiTieuKHNamGD { get; set; }

// /// <summary>
// /// Tỷ lệ thực hiện KH cả giai đoạn
// /// </summary>
// public decimal? mnTyLeThucHienGiaiDoan { get; set; }
// public string ntGhiChu { get; set; }
// }
export class TT01DataDTO {
       
    
    private _nsMS: string;
    private _nsTT: string;
    private _nsChiSo: string;
    private _nsDVT: string;
    private _nsPhanTo: string;
    private _nsDB: string;
    private _mnSoLieuTH: number;
    private _mnSoLieuLuyKe: number;
    private _mnChiTieuKHNamBC: number;
    private _mnTyLeKHNam: number;
    private _mnLuyKeThucHien: number;
    private _mnChiTieuKHNamGD: number;
    private _mnTyLeThucHienGiaiDoan: number;
    private _ntGhiChu: string;

    // private _nsTTDuAn: string;
    // private _nsChiSoDuAn: string;
    
    constructor(nsMS: string, nsTT: string, nsChiSo: string, nsDVT: string, nsPhanTo: string, nsDB: string, mnSoLieuTH: number, mnSoLieuLuyKe: number, mnChiTieuKHNamBC: number, mnTyLeKHNam: number, mnLuyKeThucHien: number, mnChiTieuKHNamGD: number, mnTyLeThucHienGiaiDoan: number, ntGhiChu: string
        ,
        // nsTTDuAn: string, nsChiSoDuAn: string
        ) {
        this._nsMS = nsMS;
        this._nsTT = nsTT;
        this._nsChiSo = nsChiSo;
        this._nsDVT = nsDVT;
        this._nsPhanTo = nsPhanTo;
        this._nsDB = nsDB;
        this._mnSoLieuTH = mnSoLieuTH;
        this._mnSoLieuLuyKe = mnSoLieuLuyKe;
        this._mnChiTieuKHNamBC = mnChiTieuKHNamBC;
        this._mnTyLeKHNam = mnTyLeKHNam;
        this._mnLuyKeThucHien = mnLuyKeThucHien;
        this._mnChiTieuKHNamGD = mnChiTieuKHNamGD;
        this._mnTyLeThucHienGiaiDoan = mnTyLeThucHienGiaiDoan;
        this._ntGhiChu = ntGhiChu;
        // this._nsTTDuAn = nsTTDuAn;
        // this._nsChiSoDuAn = nsChiSoDuAn;
    }
    public get nsMS(): string {
        return this._nsMS;
    }
    public set nsMS(value: string) {
        this._nsMS = value;
    }
    public get nsTT(): string {
        return this._nsTT;
    }
    public set nsTT(value: string) {
        this._nsTT = value;
    }
    public get nsChiSo(): string {
        return this._nsChiSo;
    }
    public set nsChiSo(value: string) {
        this._nsChiSo = value;
    }
    public get nsDVT(): string {
        return this._nsDVT;
    }
    public set nsDVT(value: string) {
        this._nsDVT = value;
    }
    public get nsPhanTo(): string {
        return this._nsPhanTo;
    }
    public set nsPhanTo(value: string) {
        this._nsPhanTo = value;
    }
    public get nsDB(): string {
        return this._nsDB;
    }
    public set nsDB(value: string) {
        this._nsDB = value;
    }
    public get mnSoLieuTH(): number {
        return this._mnSoLieuTH;
    }
    public set mnSoLieuTH(value: number) {
        this._mnSoLieuTH = value;
    }
    public get mnSoLieuLuyKe(): number {
        return this._mnSoLieuLuyKe;
    }
    public set mnSoLieuLuyKe(value: number) {
        this._mnSoLieuLuyKe = value;
    }
    public get mnChiTieuKHNamBC(): number {
        return this._mnChiTieuKHNamBC;
    }
    public set mnChiTieuKHNamBC(value: number) {
        this._mnChiTieuKHNamBC = value;
    }
    public get mnTyLeKHNam(): number {
        return this._mnTyLeKHNam;
    }
    public set mnTyLeKHNam(value: number) {
        this._mnTyLeKHNam = value;
    }
    public get mnLuyKeThucHien(): number {
        return this._mnLuyKeThucHien;
    }
    public set mnLuyKeThucHien(value: number) {
        this._mnLuyKeThucHien = value;
    }
    public get mnChiTieuKHNamGD(): number {
        return this._mnChiTieuKHNamGD;
    }
    public set mnChiTieuKHNamGD(value: number) {
        this._mnChiTieuKHNamGD = value;
    }
    public get mnTyLeThucHienGiaiDoan(): number {
        return this._mnTyLeThucHienGiaiDoan;
    }
    public set mnTyLeThucHienGiaiDoan(value: number) {
        this._mnTyLeThucHienGiaiDoan = value;
    }
    public get ntGhiChu(): string {
        return this._ntGhiChu;
    }
    public set ntGhiChu(value: string) {
        this._ntGhiChu = value;
    }
    // public get nsTTDuAn(): string {
    //     return this._nsTTDuAn;
    // }
    // public set nsTTDuAn(value: string) {
    //     this._nsTTDuAn = value;
    // }
    // public get nsChiSoDuAn(): string {
    //     return this._nsChiSoDuAn;
    // }
    // public set nsChiSoDuAn(value: string) {
    //     this._nsChiSoDuAn = value;
    // }

   


  }

  

//C2:

//   export interface TT01DataDTOInterface {
//      _nsMS: string | undefined;
//      _nsTT: string | undefined;
//      _nsChiSo: string | undefined;
//      _nsDVT: string | undefined;
//      _nsPhanTo: string | undefined;
//      _nsDB: string | undefined;
//      _mnSoLieuTH: number | undefined ;
//      _mnSoLieuLuyKe: number | undefined;
//      _mnChiTieuKHNamBC: number | undefined;
//      _mnTyLeKHNam: number | undefined;
//      _mnLuyKeThucHien: number | undefined;
//      _mnChiTieuKHNamGD: number | undefined;
//      _mnTyLeThucHienGiaiDoan: number | undefined;
//      _ntGhiChu: string | undefined;
  
// }

// export class TT01DataDTO implements TT01DataDTOInterface {
//     // organization: string | undefined;
//     // browser: number | undefined;
//     // decided: number | undefined;
//     // expense: number | undefined;
//     _nsMS: string | undefined;
//     _nsTT: string | undefined;
//     _nsChiSo: string | undefined;
//     _nsDVT: string | undefined;
//     _nsPhanTo: string | undefined;
//     _nsDB: string | undefined;
//     _mnSoLieuTH: number | undefined;
//     _mnSoLieuLuyKe: number | undefined;
//     _mnChiTieuKHNamBC: number | undefined;
//     _mnTyLeKHNam: number | undefined;
//     _mnLuyKeThucHien: number | undefined;
//     _mnChiTieuKHNamGD: number | undefined;
//     _mnTyLeThucHienGiaiDoan: number | undefined;
//     _ntGhiChu: string | undefined;



//     constructor(data?: TT01DataDTOInterface) {
//         if (data) {
//             for (var property in data) {
//                 if (data.hasOwnProperty(property))
//                     (<any>this)[property] = (<any>data)[property];
//             }
//         }
//     }
   

//     init(_data?: any) {
//         if (_data) {
//             this._nsMS = _data["nsMS"];
//             this._nsTT = _data["nsTT"];
//             this._nsChiSo = _data["nsChiSo"];
//             this._nsDVT = _data["nsDVT"];
//             this._nsPhanTo = _data["nsPhanTo"];
//             this._nsDB = _data["nsDB"];
//             this._mnSoLieuTH = _data["mnSoLieuTH"];
//             this._mnSoLieuLuyKe = _data["mnSoLieuLuyKe"];
//             this._mnChiTieuKHNamBC = _data["mnChiTieuKHNamBC"];
//             this._mnTyLeKHNam = _data["mnTyLeKHNam"];
//             this._mnLuyKeThucHien = _data["mnLuyKeThucHien"];
//             this._mnChiTieuKHNamGD = _data["mnChiTieuKHNamGD"];
//             this._mnTyLeThucHienGiaiDoan = _data["mnTyLeThucHienGiaiDoan"];
//             this._ntGhiChu = _data["ntGhiChu"];

                
//             // this.organization = _data["organization"];
//             // this.browser = _data["browser"];
//             // this.decided = _data["decided"];
//             // this.expense = _data["expense"];
//         }
//     }

//     static fromJS(data: any): TT01DataDTO {
//         data = typeof data === 'object' ? data : {};
//         let result = new TT01DataDTO();
//         result.init(data);
//         return result;
//     }

//     toJSON(data?: any) {
//         data = typeof data === 'object' ? data : {};
//         data["nsMS"] = this._nsMS;
//         data["nsTT"] = this._nsTT;
//         data["nsChiSo"] = this._nsChiSo;
//         data["nsDVT"] = this._nsDVT;
//         data["nsPhanTo"] = this._nsPhanTo;
//         data["nsDB"] = this._nsDB;
//         data["mnSoLieuTH"] = this._mnSoLieuTH;
//         data["mnSoLieuLuyKe"] = this._mnSoLieuLuyKe;
//         data["mnChiTieuKHNamBC"] = this._mnChiTieuKHNamBC;
//         data["mnTyLeKHNam"] = this._mnTyLeKHNam;
//         data["mnLuyKeThucHien"] = this._mnLuyKeThucHien;
//         data["mnChiTieuKHNamGD"] = this._mnChiTieuKHNamGD;
//         data["mnTyLeThucHienGiaiDoan"] = this._mnTyLeThucHienGiaiDoan;
//         data["ntGhiChu"] = this._ntGhiChu;

//         // data["organization"] = this.organization;
//         // data["browser"] = this.browser;
//         // data["decided"] = this.decided;
//         // data["expense"] = this.expense;
//         return data; 
//     }

//     clone(): TT01DataDTO {
//         const json = this.toJSON();
//         let result = new TT01DataDTO();
//         result.init(json);
//         return result;
//     }
// }