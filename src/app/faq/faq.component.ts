import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is an on demand home service website?',
      answer: 'An on demand home service webpage is a platform that connects customers who need a specific home service with service providers who are willing to provide that service.',
      show: false // add the show property to each FAQ object
    },
    {
      question: 'How do I book a home service?',
      answer: 'You can book a home service by visiting the on demand home service webpage and selecting the service you need. You will then be prompted to enter your address, preferred date and time, and any other relevant details. Once you submit your request, the service provider will be notified and will confirm the booking with you.',
      show: false // add the show property to each FAQ object
    },
    {
       question: 'What types of home services can I book using this system?',
       answer : 'You can book a wide range of home services using Angular, including cleaning, plumbing, electrical work, landscaping, and more.',
       show : false  
    },
    {
      question: 'How do I know that the service provider is reliable?',
      answer : 'The on demand home service webpage should have a review system where customers can rate and review service providers based on their experience. You can also check the service providers credentials and certifications to ensure that they are qualified to perform the service.',
      show : false  
    },
    {
      question: ' How do I pay for the home service?',
      answer: 'You can usually pay for the home service through the on demand home service webpage using a credit card or other electronic payment method. Some services may also accept cash payments.',
      show : false
    }

    // Add more FAQ objects here
  ];
}
