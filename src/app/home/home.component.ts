import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../services/room.service';
import { roomInterface } from '../interfaces/interfaces.interface';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public rooms: roomInterface[] = [];
  public numRooms = 1;

  public roomService = inject(RoomService); // Inject the RoomService

  ngOnInit(): void {
    this.getRooms();
  }

  // Function to get the list of rooms
  private getRooms(): void {
    this.roomService.getRooms().subscribe((data: roomInterface[]) => {
      this.rooms = data;
    });
  }

  // Function to book the rooms
  bookRooms(): void {
    if (this.numRooms < 6) {
      this.roomService.bookRooms(this.numRooms).subscribe(
        {
          next: () => { this.getRooms(); },
          error: (error) => { alert(error.error.message); }
        }
      );
    }
    else {
      alert("You can only book up to 5 rooms at a time.");
    }
  }

  // Function to reset the rooms
  resetRooms(): void {
    this.roomService.resetRooms().subscribe(() => {
      this.getRooms();
    });
  }

  // Function to randomize the rooms
  randomizeRooms(): void {
    this.roomService.randomizeRooms().subscribe(() => {
      this.getRooms();
    });
  }
}