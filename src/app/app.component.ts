import { Component } from '@angular/core';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <header class="container-fluid header">
      <h1>Big Company | Building Management System</h1>
      <p>30 St Mary Axe, London</p>
    </header>
    <main>
      <div class="container">
        <p>
          Tempor elit aliqua fugiat tempor. Aliquip laboris esse amet sit tempor
          anim esse excepteur ut et. Ut do velit dolore laborum officia. Eu eu
          magna pariatur consectetur commodo minim. Cillum laborum reprehenderit
          reprehenderit officia.
        </p>
        <ludan-nickname-form></ludan-nickname-form>
      </div>
    </main>
  `
})
export class AppComponent {}
