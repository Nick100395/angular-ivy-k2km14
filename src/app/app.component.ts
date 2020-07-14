import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface experience_past {
  position: string;
  date_start: Date;
  date_end: Date;
}

export interface experience_present {
  position: string;
  date_start: Date;
  date_present: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  //String variable for Introduction part
  intro = 'Nisarg is a master’s graduate from Carleton University with a degree in Electrical and Computer Engineering. He has worked on several projects during his academic career including the development of an alumni website. He is passionate about working in a team and skilled in software development and programming. Nisarg believes that he has a strong ability to meet tight deadlines along with quality in work to accomplish desired goals. He has a keen interest in dealing with challenges which makes him an ideal software developer.';

  //String variable for duties of TCS
  duties_TCS = 'Worked on the development of alumni website for Indus University in a team. Implemented efficient code with minimized number of lines, particularly with C# and C++. Identified and implemented areas of modification in existing program. Maintained and upgraded existing systems by making them more user friendly. Tested and evaluated new programs and fixed bugs/deficiencies';

  //String variable for duties of FDM
  duties_FDM = 'Completed 16 weeks of training which includes SQL, UNIX, Eclipse, Git, JUnit, TDD, UML, OOP, Mockito, Maven, I/O, Multithreading, JDBC, JPA, Finance, HTML, CSS, JavaScript, JSP & Servlets, Spring Core, Spring MVC and Agile/Scrum. Worked on various projects such as interview feedback system, e-health care system, Tic-Tac-Toe game, user registration, etc. in Java. Followed scrum model for the group project and worked closely in a cross functional team to accomplish desired user stories/tasks for each sprint/iteration. Currently working to upscale AWS, Angular JS, JavaScript, and Node JS';

  //Array for Educational Qualifications
  displayedColumns = ['Degree', 'University','Duration']

  dataSource = [{degree:'Bachelors', university:'Indus University', duration:'July 2012 - June 2016'}, {degree: 'Masters', university:'Carleton University',duration:'Jan 2017 - Dec 2018'}]

  //Boolean variable for Academic Projects
  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
  panel4OpenState = false;

  //Arrays for Employment History
  experience_past: experience_past[] = [
    {
      position: 'Software Developer - Tata Consultancy Services, Ahmedabad, India',
      date_start: new Date('1/4/16'),
      date_end: new Date('12/18/16')
    }
  ];
  experience_present: experience_present[] = [
    {
      position: 'Junior Software Developer - FDM Group Academy, Toronto, Canada',
      date_start: new Date('2/18/16'),
      date_present: 'Present'
    }
  ];

  //Array for Interests & Activities
  members: {title: string, subtitle: string, content: string, url: string}[] = [
      {title: 'Tutoring', subtitle: 'Mathematics', content: 'Tutoring is my passion. I worked as a Math-tutor with high school students over a year and half. I enjoy helping students with complex problems and guiding them easiest methods.', url: 'https://cdn.jsdelivr.net/gh/Nick100395/angular-ivy-k2km14@master/src/Tutoring.jpg'},
      {title: 'Travelling', subtitle: 'Exploring World', content: 'Being an outdoor person, I love travelling and exploring new places quite often. I like talking to people of different cultures to know about their interests and lifestyle in detail.', url: 'https://cdn.jsdelivr.net/gh/Nick100395/angular-ivy-k2km14@master/src/Travelling.jpg'},
      {title: 'Puzzles', subtitle: 'Brainstorm', content: 'Since I prefer dealing with new challenges daily, I like solving complex puzzles where I can brainstorm and find the most efficient and fast way to get solution using my excellent problem solving ability.', url: 'https://cdn.jsdelivr.net/gh/Nick100395/angular-ivy-k2km14@master/src/Puzzle1.jpg'}
    ];

  //API Call from another Website
  users = [];
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  GetUserData() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
        this.users = data;
      });
  }

  ClearUserData() {
    this.users = [];
  }
}

