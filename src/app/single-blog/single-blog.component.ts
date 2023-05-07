import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloggingService } from '../blogging.service';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  blog: any;
  listening: boolean = false;
  recognition: any;

  constructor(
    private route: ActivatedRoute,
    private bloggingService: BloggingService
  ) { }

  ngOnInit(): void {
    let id :any;
    id = this.route.snapshot.paramMap.get('id');
    this.bloggingService.getBlogById(id).subscribe(
      response => {
        console.log(response);
        this.blog = response;
      },
      error => {
        console.log('Error while fetching blog details', error);
      }
    );
  }

  startListening() {
    this.listening = true;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onresult = (event: { resultIndex: any; results: string | any[]; }) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      if (finalTranscript !== '') {
        let msg = new SpeechSynthesisUtterance(finalTranscript);
        window.speechSynthesis.speak(msg);
      }
    };

    this.recognition.onend = () => {
      this.listening = false;
    }

    this.recognition.start();
    this.readDescription();
  }

  stopListening() {
    this.listening = false;
    window.speechSynthesis.cancel();
    this.recognition.stop();
  }

  readDescription() {
    if ('speechSynthesis' in window) {
      let msg = new SpeechSynthesisUtterance(this.blog.description);
      window.speechSynthesis.speak(msg);
    }
  }
}
