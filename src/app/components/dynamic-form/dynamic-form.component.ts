import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Question } from '../../models';

@NgModule({
  imports: [ReactiveFormsModule]
})

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Array<Question>;
  formGroup: FormGroup;
  payload: string;

  constructor() { }

  ngOnInit() {
    this.formGroup = this.generateForm(this.questions || []);
  }

  private generateForm(questions: Array<Question>): FormGroup {
    const formControls = questions.reduce(this.generateControl, {} );
    return new FormGroup(formControls);
  }

  private generateControl(controls: any, question: Question) {
        if (question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        } else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls;
  }

  submit() {
        this.payload = JSON.stringify(this.formGroup.value);
    }

}
