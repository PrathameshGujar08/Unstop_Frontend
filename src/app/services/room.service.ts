import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { roomInterface } from '../interfaces/interfaces.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Fetch all rooms
  getRooms(): Observable<roomInterface[]> {
    return this.http.get<roomInterface[]>(`${this.apiUrl}/rooms`);
  }

  // Book rooms
  bookRooms(numRooms: number): Observable<{ message: string; rooms: roomInterface[] }> {
    return this.http.post<{ message: string; rooms: roomInterface[] }>(`${this.apiUrl}/book`, { numRooms });
  }

  // Reset all room bookings
  resetRooms(): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/reset`, {});
  }

  // Generate random room occupancy
  randomizeRooms(): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/randomize`, {});
  }
}
