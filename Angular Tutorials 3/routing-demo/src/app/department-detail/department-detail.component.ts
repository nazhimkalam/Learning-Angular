import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected department with the id = {{ departmentId }}</h3>

    <button (click)="goToDepartments()">Back</button>
    <br />
    <a (click)="onPrevious()">Previous</a>
    <a (click)="onNext()">Next</a>
  `,
  styles: [
    `
      a {
        padding: 20px;
      }
      button {
        padding: 10px;
        margin: 20px;
      }
    `,
  ],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  public previousId: number;
  public nextId: number;
  public id: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;                // this snapshot method won't work for next and previous

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      this.departmentId = this.id;
    });
  }

  onPrevious() {
    this.previousId = this.departmentId - 1;
    this.router.navigate(['/departments', this.previousId]);
  }
  onNext() {
    this.nextId = this.departmentId + 1;
    this.router.navigate(['/departments', this.nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route,
    });
  }
}
