import { TT01DataDTO } from "src/app/models/tt01DTO/tt01DataDto.model";

export function getTT01DataImport(d: any): TT01DataDTO {
    return new TT01DataDTO(
        d.nsMS,
        d.nsTT,
        d.nsChiSo,
        d.nsDVT,
        d.nsPhanTo,
        d.nsDB,
        d.mnSoLieuTH,
        d.mnSoLieuLuyKe,
        d.mnChiTieuKHNamBC,
        d.mnTyLeKHNam,
        d.mnLuyKeThucHien,
        d.mnChiTieuKHNamGD,
        d.mnTyLeThucHienGiaiDoan,
        d.ntGhiChu

    )
    // code của hàm
  }