import { Component } from '@angular/core';
import { JOmnisWrapper } from 'src/OmnisWrapper';

console.warn('jOmnis?', jOmnis);

// This isn't ideal: it saves the wrapper as a global variable
// i think that it should wrapped around a Service or something Observable
// (i'm no Angular expert, i just had a quick look at the docs)
let anyWindow = window as any;
anyWindow.jOmnisWrapper = new JOmnisWrapper(jOmnis);

console.warn('jOmnisWrapper', anyWindow.jOmnisWrapper);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
