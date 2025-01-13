import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Injectable means that we are now able to inject the reservation service into a constructor
// constructor runs before ngOnInit
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

    private apiUrl = "http://localhost:3000"
    private reservations: Reservation[] = [];

    constructor(private http: HttpClient) {

    }

    getReservations(): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(this.apiUrl + '/reservations')
    }

    getReservation(id: string): Observable<Reservation> {
      return this.http.get<Reservation>(this.apiUrl + '/reservations/' + id)
    }

    addReservation(reservation: Reservation): Observable<void> {
      reservation.id = Date.now().toString();
      return this.http.post<void>(this.apiUrl + '/reservations', reservation);
    }

    deleteReservation(id: string): Observable<void> {
      return this.http.delete<void>(this.apiUrl + '/reservations/' + id)
    }

    updateReservation(id: string, reservation: Reservation): Observable<void> {
      return this.http.put<void>(this.apiUrl + '/reservations/' + id, reservation);
    }
}
