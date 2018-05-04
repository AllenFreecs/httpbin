import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {IP} from '../Model/IPModel'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-httpbin',
  templateUrl: './httpbin.component.html',
  styleUrls: ['./httpbin.component.scss']
})
export class HttpbinComponent implements OnInit {
  OriginIP:string;
  Utf8Data:string;
  Base64Data:string = 'SGkhISEhIGltIEFsbGVuIEZyZWVjcw==';
  Base64String:string;
  HTMLString:string;
  
  constructor(private _data:HttpService) { 
    // this._data.getOriginIP();
    //this._data.getUtf8();
  }

  ngOnInit() {
  }
  getOriginIP() 
  {
    
   this._data.getOriginIP().subscribe(
    // the first argument is a function which runs on success
    data => { 
    var jsonstring = JSON.stringify(data)
    var jsondata= JSON.parse(jsonstring)
    this.OriginIP = jsondata.origin;

    },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('http call complete')
  );

  
  }
  
  getUtf8()
  {
    this._data.getUtf8().subscribe(
      // the first argument is a function which runs on success
      data => { 
      var jsonstring = JSON.stringify(data)
      var jsondata= JSON.parse(jsonstring)
      this.Utf8Data = jsondata;
  
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('http call complete')
    );

  }
  getBase64()
  {
    this._data.getBase64(this.Base64Data).subscribe(
      // the first argument is a function which runs on success
      data => { 
      var jsonstring = JSON.stringify(data)
      var jsondata= JSON.parse(jsonstring)
      this.Base64String= jsondata
      
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () =>  console.log('http call complete')
    );
  }
  getGzip()
  {
   this._data.downloadGzip().subscribe(
    // the first argument is a function which runs on success
    data => { 
    // var jsonstring = JSON.stringify(data)
    // var jsondata= JSON.parse(jsonstring)
    let file = new Blob([data], { type: 'application/tar+gzip' });
    console.log(file)
    FileSaver.saveAs(file, 'helloworld');
    },
    // the second argument is a function which runs on error
    err => console.error(err),
    // the third argument is a function which runs on completion
    () => console.log('http call complete')
  );
  }
 
  getHTML()
  {
    this._data.getHTML().subscribe(
      // the first argument is a function which runs on success
      data => { 
      // var jsonstring = JSON.stringify(data)
      // var jsondata= JSON.parse(jsonstring)
       this.HTMLString = data;
      console.log(data);
      
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('http call complete')
    );
   
  
  }
  

  getImageViaAcceptHeader()
  {
    this._data.getImageViaAcceptHeader().subscribe(
      // the first argument is a function which runs on success
      data => { 
        // var jsonstring = JSON.stringify(data)
        // var jsondata= JSON.parse(jsonstring)
        let file = new Blob([data], { type: 'image/png' });
        console.log(file)
        FileSaver.saveAs(file, 'helloworld');
       
        
        },
        // the second argument is a function which runs on error
        err => console.log(err),
        // the third argument is a function which runs on completion
        () => console.log('http call complete')

    )
    
    

  }
  
  getPNG()
  {
    this._data.getPNG().subscribe(
      // the first argument is a function which runs on success
      data => { 
        // var jsonstring = JSON.stringify(data)
        // var jsondata= JSON.parse(jsonstring)
        let file = new Blob([data], { type: 'image/png' });
        console.log(file)
        FileSaver.saveAs(file, 'helloworld');
       
        
        },
        // the second argument is a function which runs on error
        err => console.log(err),
        // the third argument is a function which runs on completion
        () => console.log('http call complete')

    )

    
    

  }

  getJPEG()
  {
    this._data.getjpeg().subscribe(
      // the first argument is a function which runs on success
      data => { 
        // var jsonstring = JSON.stringify(data)
        // var jsondata= JSON.parse(jsonstring)
        let file = new Blob([data], { type: 'image/jpeg' });
        console.log(file)
        FileSaver.saveAs(file, 'helloworld');
       
        
        },
        // the second argument is a function which runs on error
        err => console.log(err),
        // the third argument is a function which runs on completion
        () => console.log('http call complete')

    )

    
    

  }
  
  getwebp()
  {
    this._data.getwebp().subscribe(
      // the first argument is a function which runs on success
      data => { 
        // var jsonstring = JSON.stringify(data)
        // var jsondata= JSON.parse(jsonstring)
        let file = new Blob([data], { type: 'image/webp' });
        console.log(file)
        FileSaver.saveAs(file, 'helloworld');
       
        
        },
        // the second argument is a function which runs on error
        err => console.log(err),
        // the third argument is a function which runs on completion
        () => console.log('http call complete')

    )
   

  }
  getsvg()
  {
    this._data.getsvg().subscribe(
      // the first argument is a function which runs on success
      data => { 
        // var jsonstring = JSON.stringify(data)
        // var jsondata= JSON.parse(jsonstring)
        let file = new Blob([data], { type: 'image/svg+xml' });
        console.log(file)
        FileSaver.saveAs(file, 'helloworld');
       
        
        },
        // the second argument is a function which runs on error
        err => console.log(err),
        // the third argument is a function which runs on completion
        () => console.log('http call complete')

    )
   

  }
  


  getxml()
  {
    this._data.getxml().subscribe(
      // the first argument is a function which runs on success
      data => { 
        // var jsonstring = JSON.stringify(data)
        // var jsondata= JSON.parse(jsonstring)
        let file = new Blob([data], { type: 'text/xml' });
        console.log(file)
        FileSaver.saveAs(file, 'helloworld');
       
        
        },
        // the second argument is a function which runs on error
        err => console.log(err),
        // the third argument is a function which runs on completion
        () => console.log('http call complete')

    )
   
    
    
    

  }














  

}

