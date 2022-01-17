# ngx-bulma-alert

![Demo Image](https://raw.githubusercontent.com/ParthModi9494/ngx-bulma-alert/master/projects/ngx-bulma-alert-tester/src/assets/danger.png?row=true)

## Install

```bash
npm install ngx-bulma-alert --save
```

`bulma` package is a required dependency for the default alert styles

```bash
npm i bulma --save
```

## Setup

**Step 1:** Add **NgxBulmaAlertModule** to app NgModule

```typescript
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgxBulmaAlertModule } from "ngx-bulma-alert";

@NgModule({
  imports: [NgxBulmaAlertModule], // add a module
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Step 2:** Add default bulma styles

- If you are using sass you can import the css.

```scss
@import 'bulma/css/bulma.min.css';
```

- If you are using angular-cli you can add it to your `angular.json`

```ts
"styles": [
  "node_modules/bulma/css/bulma.min.css" // add here
  "styles.scss",
]
```

## Use

```typescript
import { Component } from "@angular/core";
import { NgxBulmaAlertService } from "ngx-bulma-alert";

@Component({
  selector: "my-app",
  // Add a selector to the root component
  template: `<ngx-bulma-alert></ngx-bulma-alert>`,
})
export class AppComponent {
  // Inject NgxBulmaAlertService
  constructor(private alertService: NgxBulmaAlertService) {}

  openAlert() {
    this.alertService
      .createAlert({
        title: "Deleted?",
        content: "This operation will delete the Item permanantly.",
        confirmText: "Delete",
        cancelText: "Cancel",
        type: "danger",
      })
      .onAlertDismiss.subscribe((confirmed: boolean) => {
        if (confirmed) {
          // Proceed with an operation after User confirmation
        } else {
          // Proceed with an opeartion after User declines or Cancel the alert
        }
      });
  }
}
```

## Options

| Options | Type | Default | Description |
| -- | -- |--|--|
| type | string `'success'`\|`'info'`\|`'warning'`\|`'danger'`|`'info'`|Type of the alert to show
| title | string |`''`| Title of the alert box |
| content | string |`''` | Body of the alert box |
| confirmText | string | Confirm button will be hidden if not passed | Text of Confirm button |
| cancelText | string | Cancel button will be hidden if not passed | Text of Cancel button |

## License

MIT

---

> GitHub [@ParthModi9494](https://github.com/ParthModi9494) &nbsp;&middot;&nbsp;
> Twitter [@Parth_R_Modi](https://twitter.com/Parth_R_Modi) &nbsp;&middot;&nbsp;
> Website [@parthmodi.in](https://parthmodi.in)
