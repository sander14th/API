
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Api';
  public data: any;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void{
    this.fetchDetails();
  }

  public fetchDetails(){
    this.http.get('https//jsonplaceholder.typicode.com/todos/1').subscribe(
      (resp:any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  }
}
