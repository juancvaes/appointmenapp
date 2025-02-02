import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', [Validators.required]],
      checkOutDate: ['', [Validators.required]],
      guestName: ['', [Validators.required]],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required]],
    })

    // Checking if the active route contains and id parameter,
    //  meaning we are editing.
    let id = this.activeRoute.snapshot.paramMap.get('id')
    if (id){
      let reservation = this.reservationService.getReservation(id)
      if (reservation){
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      // Checking if the active route contains and id parameter
      let id = this.activeRoute.snapshot.paramMap.get('id')
      if (id){
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("Update request got processed.")
        });
      } else {
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Create request got processed.")
        });
      }
      this.router.navigate(["/list"])
    }
  }
}
