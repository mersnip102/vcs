import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PagesService } from 'src/app/services/pages/pages.service';

@Component({
  selector: 'app-bao-cao-tong-hop',
  templateUrl: './bao-cao-tong-hop.component.html',
  styleUrls: ['./bao-cao-tong-hop.component.css']
})
export class BaoCaoTongHopComponent implements OnInit {
  pdfUrl: any | undefined;
  isSpinning = false;
  
  ngOnInit(): void {
    this.getPdfData();
  }
  constructor(private sanitizer: DomSanitizer, private api: PagesService) { }

  getPdfData() {
    this.isSpinning = true;
    
    this.api.getPdfData().subscribe((res: any) => {
      console.log(res);

      // Giải mã base64
   const binaryString = atob(res.result);

   // Chuyển đổi dữ liệu nhị phân thành đối tượng Blob
   const blob = new Blob([new Uint8Array([...binaryString].map(char => char.charCodeAt(0)))], { type: 'application/pdf' });

   // Tạo URL đến blob và tạo SafeUrl
   this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
  //open pdf file in new tab
  window.open(this.pdfUrl!.changingThisBreaksApplicationSecurity, '_blank');
  this.isSpinning = false;


    }, (err) => {
      console.log(err);
      this.isSpinning = false;
     
    })
  }

}
