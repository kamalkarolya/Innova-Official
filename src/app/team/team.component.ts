import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import teamData from './team.component.data';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent implements OnInit {

  mailIcon = faEnvelope;
  linkedInIcon = faLinkedin;

  constructor() { }

  council = teamData;

  ngOnInit(): void {
  }

}
