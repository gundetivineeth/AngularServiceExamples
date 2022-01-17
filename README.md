# AngularServiceExamples

## Services in Angular

A new service file can be created by making use of Angular-cli command

`ng g s service-name`

Provider is used to define the service class in app.module.ts but with new Angular 6 and above version we dont have to do that 

@Injectable({
  providedIn: 'root'
})

this helps in doing with out adding at provider in app.module.ts

Service helps in reducing the communication complicity between components 

please check the commit to understand the evolution from EventEmitters to without EventEmitters in html files

