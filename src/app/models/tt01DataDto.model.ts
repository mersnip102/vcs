
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
    constructor(nsMs: string, nsTT: string, nsChiSo: string, nsDVT: string, nsPhanTo: string, nsDB: string, mnSoLieuTH: number, mnSoLieuLuyKe: number, mnChiTieuKHNamBC: number, mnTyLeKHNam: number, mnLuyKeThucHien: number, mnChiTieuKHNamGD: number, mnTyLeThucHienGiaiDoan: number, ntGhiChu: string) {
        this._nsMS = nsMs;
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



   
  }