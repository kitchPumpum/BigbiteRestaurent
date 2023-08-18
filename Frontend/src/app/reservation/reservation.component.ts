import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  timeSlots = this.generateTimeSlots();

  generateTimeSlots() {
    const startTime = 11 * 60; // 11:00 AM in minutes
    const endTime = 22 * 60;   // 10:00 PM in minutes
    const interval = 15;       // 15-minute increments
    const timeSlots = [];

    for (let time = startTime; time <= endTime; time += interval) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${hours}:${minutes === 0 ? '00' : minutes}`;
      timeSlots.push(formattedTime);
    }

    return timeSlots;
}
}
