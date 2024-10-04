import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TaskService } from './task.service';
import { Task } from '../models/task';

// Please complete the following integration tests for TaskService

describe('TaskService', () =>
{

  beforeEach((async () =>
  {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClientModule]
    }).compileComponents();

  }));

  describe('getTasks', () =>
  {
    it('should return an array of tasks', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      service.createTask(new Task(1, 'name', 'description', '10-10-24', '10-10-24', true, 'test'))
      const tasks = service.getTasks();
      expect(tasks).to.be.have.length.greaterThan(0);
      // TODO: Implement test

    })));
  });

  describe('getTask', () =>
  {
    it('should return a single task', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      const task = service.getTask(1);
      expect(task).be.true;
    })));
  });

  describe('createTask', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

  describe('updateTask', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

  describe('deleteTask', () =>
  {
    it('should return true', (inject([HttpClient], async (http) =>
    {
      const service = new TaskService(http);
      // TODO: Implement test

    })));
  });

});
