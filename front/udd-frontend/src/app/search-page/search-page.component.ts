import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  queryForm: FormGroup;

  ngOnInit(): void {
  }

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) {
    this.queryForm = this.formBuilder.group({
      query: [''],
      queryType: ['simple']
    });
  }

  submitFileUploadForm(event: Event, fileInput: HTMLInputElement): void {
    event.preventDefault();

    if (fileInput.files && fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      this.searchService.uploadFile(formData).subscribe({
        next: () => {
          this.successMessage = 'File uploaded and indexed successfully.';
          this.errorMessage = null;
        },
        error: () => {
          this.errorMessage = 'An error occurred, please try again...';
          this.successMessage = null;
        }
      });
    } else {
      this.errorMessage = 'Please select a file.';
      this.successMessage = null;
    }
  }

  submitQuery() {
    if (this.queryForm.valid) {
      const query = {
        keywords: this.queryForm.value.query.split(' ')
      };

      const method = this.queryForm.value.queryType === 'advanced' ? 'searchAdvanced' : 'searchSimple';

      this.searchService[method](query).subscribe({
        next: (data: any) => {
          console.log(data)
          this.displayResults(data);
        },
        error: (error) => {
          console.error('Error executing search:', error);
        }
      });
    } else {
      console.error('Error!');
    }
  }

  displayResults(data: any) {
    // Your display results logic here
  }
}
