import { Component, OnInit } from '@angular/core';
import { GitDatInfoService } from 'src/app/services/git-dat-info.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  constructor (private gitDatInfo: GitDatInfoService) {}

  theFirstOne: string = 'arceus';
  apiResponse: string = '';

  ngOnInit(): void {
    
  }

  search(name: string) {
    this.gitDatInfo.searchPokemon(name).subscribe(
      (res: any) => this.apiResponse = res
    )
  }
}
