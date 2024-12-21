import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Work {
  id: number;
  title: string;
  full_title: string;
  tags: string[];
  main_img: string;
  year: string;
  text: string;
  content: [string, string][];
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  work_data = [
    {
      id: 1, 
      title: 'Designing Dashboards', 
      full_title: 'Designing Dashboards with usability in mind', 
      tags: ['Dashboard', 'User Experience Design'],
      main_img: '/one.png', 
      year: '2020', 
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', 
      content: [
          ['h1', 'The Pros and Cons of Auto Insurance'],
          ['img', 'https://images.freeimages.com/images/large-previews/e81/westminster-bridge-and-big-ben-london-uk-1635339.jpg'],
          ['h2', 'Top 10 Auto Maintenance Tips'],
          ['text', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']
      ]
    },
    {
      id: 2, 
      title: 'Designing Landing pages', 
      full_title: 'Designing Landing pages with other view', 
      tags: ['Website', 'Langing', 'Design'], 
      year: '2020', 
      main_img: '/two.png', 
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', 
      content: [
          ['h1', 'When Is the Best Time to Start a Website?'],
          ['img', 'https://images.freeimages.com/images/large-previews/b65/bald-eagle-1635769.jpg'],
          ['text', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
          ['h2', '10 Ways to Create an Engaging Website'],
          ['img', 'https://images.freeimages.com/images/large-previews/6bd/laundry-1522596.jpg'],
          ['text', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
      ]
    },
    {
      id: 3, 
      title: 'How to Create Content', 
      full_title: 'How to Create Quality Content: A Top N Guide', 
      tags: ['Website', 'Content', 'Instruments'], 
      year: '2019', 
      main_img: '/three.png', 
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', 
      content: [
          ['h1', 'Top 5 Benefits of Creating Quality Content'],
          ['h2', 'The Art of Crafting Engaging Content'],
          ['img', 'https://images.freeimages.com/images/large-previews/ab7/gerber-and-rose-2-1544099.jpg'],
          ['text', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
          ['img', 'https://images.freeimages.com/images/large-previews/d41/bear-combat-2-1332988.jpg'],
          ['text', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
      ]
    },
    
  ];
}
