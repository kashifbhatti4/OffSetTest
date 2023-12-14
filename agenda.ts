export interface IAgendaEvent {
  id: number;
  subject: string;
  start: string;
  end: string;
  minuteEventOffset: number;
  reminder: number;
  duration: number;
  active: boolean;
  showReminder: boolean;
  enableJoinBtn: boolean;
  displayVirtualMeeting: boolean;
  meetingUrl: string;
}
export interface IAgenda {

  id: number;
  name: string;
  events: IAgendaEvent[]

}