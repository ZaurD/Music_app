import { Component, OnInit } from '@angular/core';
import { Music } from './models/music';

@Component({
  selector: 'app-temporary',
  templateUrl: './temporary.component.html',
  styleUrls: ['./temporary.component.scss'],
})
export class TemporaryComponent implements OnInit {
  public music: Music = { singerName: 'Madonna', songTitle: 'Frozen' };

  constructor() {}

  musicClick(): void {
    alert('sing the song')
  }

  ngOnInit(): void {}
}
