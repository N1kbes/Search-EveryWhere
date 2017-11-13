import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  header = 'Search everywhere';
  searchForm: FormGroup;
  systems = [
    {name: 'Укажите поисковую систему', value: ''},
    {name: 'Google', value: 'google'},
    {name: 'Yahoo', value: 'search.yahoo'},
    {name: 'Bing', value: 'bing'},
  ];

  constructor() {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      text: new FormControl('', [
        Validators.required
      ]),
      system: new FormControl(this.systems[0].value, [
        forbiddenNameValidator(this.systems[0].value)
      ])
    });
  }

  get text() { return this.searchForm.get('text'); }
  get system() { return this.searchForm.get('system'); }

  openSearch() {
    const data = this.searchForm.value;
    window.open('http://' + data.system + '.com/search?q=' + data.text);
  };
}
