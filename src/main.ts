import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Subscription, timer } from 'rxjs';
import 'zone.js';
import { IAgenda, IAgendaEvent } from '../agenda';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})

export class App {
  name = 'Angular';
  elapsedMinutes: number = 1;
  minutetimer: Subscription=new Subscription;
  agenda!: IAgenda;

  

  ngOnInit(){
    const a: IAgenda = {
      "id": 6244,
      "name": "KM_ALL_DAY",
      events: []
    };
    
    var e: IAgendaEvent[] = [
      {
          "id": 43321,
          "subject": "Business Goals",
          "start": "2025-01-20T11:45:00",
          "end": "2025-01-20T11:55:00",
          "minuteEventOffset": -29,
          "reminder": 15,
          "displayVirtualMeeting": true,
          "meetingUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTUxZGFhMzEtNDE0My00NGU0LWE3ZjctNmIwMmIyYzA4Y2Yw%40thread.v2/0?context=%7b%22Tid%22%3a%225a50bdd9-5b35-4c1f-a977-f078974e6d10%22%2c%22Oid%22%3a%2215be037e-9bf6-455c-9d20-4be0168b8bac%22%7d",
          duration: 15,
          active: false,
          showReminder: true,
          enableJoinBtn: false
      },
      {
        "id": 43322,
        "subject": "Business Plan Presentation",
        "start": "2025-01-20T12:00:00",
        "end": "2025-01-20T12:10:00",
        "minuteEventOffset": -28,
        "reminder": 15,
        "displayVirtualMeeting": true,
        "meetingUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTM0ZmEwZTMtZTQ4Zi00ODk3LWEwYzctMzhlYTI5ODVmZmQ3%40thread.v2/0?context=%7b%22Tid%22%3a%225a50bdd9-5b35-4c1f-a977-f078974e6d10%22%2c%22Oid%22%3a%2215be037e-9bf6-455c-9d20-4be0168b8bac%22%7d",
        duration: 15,
          active: false,
          showReminder: true,
          enableJoinBtn: false
      },
      {
          "id": 43323,
          "subject": "Participant Completes Career Achievement and Experience Inventory",
          "start": "2025-01-20T12:15:00",
          "end": "2025-01-20T12:25:00",
          "minuteEventOffset": 1,
          "reminder": 15,
          "displayVirtualMeeting": true,
          "meetingUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjRhZDQ4NGQtYjBmYi00NDgyLTkzYjEtMzhjNDEyZWJmMjYy%40thread.v2/0?context=%7b%22Tid%22%3a%225a50bdd9-5b35-4c1f-a977-f078974e6d10%22%2c%22Oid%22%3a%2215be037e-9bf6-455c-9d20-4be0168b8bac%22%7d",
          duration: 15,
            active: false,
            showReminder: true,
            enableJoinBtn: false
      },
      {
          "id": 43324,
          "subject": "Business Presentation Prep",
          "start": "2025-01-20T12:30:00",
          "end": "2025-01-20T12:40:00",
          "minuteEventOffset": 16,
          "reminder": 15,
          "displayVirtualMeeting": true,
          "meetingUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2Y3YWQ4ZjgtOWJjMS00OTM3LWFjZTQtZjg0NGMxNmU0MzI1%40thread.v2/0?context=%7b%22Tid%22%3a%225a50bdd9-5b35-4c1f-a977-f078974e6d10%22%2c%22Oid%22%3a%2215be037e-9bf6-455c-9d20-4be0168b8bac%22%7d",
          duration: 15,
            active: false,
            showReminder: true,
            enableJoinBtn: false
      },
      {
          "id": 43325,
          "subject": "Business Unit Analysis",
          "start": "2025-01-20T12:45:00",
          "end": "2025-01-20T12:55:00",
          "minuteEventOffset": 31,
          "reminder": 15,
          "displayVirtualMeeting": true,
          "meetingUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzQ0NDVkZDEtYmEwMy00MjNmLWI3MGItOTJhYmJkNmNjODUz%40thread.v2/0?context=%7b%22Tid%22%3a%225a50bdd9-5b35-4c1f-a977-f078974e6d10%22%2c%22Oid%22%3a%2215be037e-9bf6-455c-9d20-4be0168b8bac%22%7d",
          duration: 15,
            active: false,
            showReminder: true,
            enableJoinBtn: false
      },
      {
          "id": 43326,
          "subject": "Coaching – Alex Renton",
          "start": "2025-01-20T13:00:00",
          "end": "2025-01-20T13:10:00",
          "minuteEventOffset": 46,
          "reminder": 15,
          "displayVirtualMeeting": true,
          "meetingUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDVkYWQ4YTAtYWViYi00NzRiLWEyZTAtYzcxOGZkNjZkODM1%40thread.v2/0?context=%7b%22Tid%22%3a%225a50bdd9-5b35-4c1f-a977-f078974e6d10%22%2c%22Oid%22%3a%2215be037e-9bf6-455c-9d20-4be0168b8bac%22%7d",
          duration: 15,
            active: false,
            showReminder: true,
            enableJoinBtn: false
      }
    ];
    a.events = e;
    this.agenda = a;
    this.startTimer();
  }

  public startTimer() {
    if (this.minutetimer) {
      this.minutetimer.unsubscribe();
    }
    this.minutetimer = timer(3000, 60000).subscribe((t: number) => {
      console.log(t);
      this.elapsedMinutes = t === 0 ? 1 : t;
      console.log(this.elapsedMinutes);
      this.checkAgenda();
    });
    
    return (`TmeElapsed: ${this.elapsedMinutes}`);
  }
  
  private checkAgenda() {
    var activeagenda = this.agenda;
    if (activeagenda?.events) {
      activeagenda.events.forEach(e => {
        e.active = false;
        if (e.minuteEventOffset <= this.elapsedMinutes && ((e.minuteEventOffset + e.duration) >= this.elapsedMinutes))
        e.active = true;
        e.showReminder = false;

        // Enable agenda event join button before 10 min
        if (this.elapsedMinutes >= e.minuteEventOffset - 10 ||
          (e.minuteEventOffset < 0 && e.minuteEventOffset + 30 > 0)) {
          console.log(`Enable Join Button: ${e.subject}`)
          e.enableJoinBtn = true;
        }
        // Join button disable after 30 min of agenda event duration
        if (e.enableJoinBtn == true && this.elapsedMinutes >= (e.minuteEventOffset + e.duration + 30)) {
          console.log(`Diable Join Button: ${e.subject}`)
          e.enableJoinBtn = false;
        }
        
        if (this.elapsedMinutes === e.minuteEventOffset - e.reminder) {
          console.log(`Show Reminder: ${e.reminder}`);
          e.showReminder = true;

        }
      });
    }
  }
    
}

bootstrapApplication(App);
