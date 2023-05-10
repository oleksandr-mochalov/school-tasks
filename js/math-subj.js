function mathSubjMain() {
  function getSubjectContainer() {
    return document.querySelector('.subject-container');
  }

  function getTasksContainer() {
    return document.querySelector('.tasks-container');
  }

  function setTextToSubjectContainer() {
    const subjectContainer = getSubjectContainer();
    subjectContainer.innerHTML = "Завдання з Математики для Єви";
  }

  function removeAllCihldrenFromTasksContainer() {
    const tasksContainer = getTasksContainer();
    tasksContainer.innerHTML = '';
  }

  function prepareTasks() {
    const tasts = [];
    const count = 10;
    for (let i = 0; i < count; i++) {
      const a = Math.floor(Math.random() * 39) + 11;
      const b = Math.floor(Math.random() * 39) + 11;
      const c = Math.floor(Math.random() * 48) + 51;
      const d = Math.floor(Math.random() * 38) + 11;
      const row = [{ id: i, values: [a, b], operand: '+' }, { id: i+count, values: [c, d], operand: '-' }]
      tasts.push(row);
    }
    return tasts;
  }

  function buildTask(task) {
    const container = getTasksContainer();
    const divTable = document.createElement('div');
    divTable.classList.add('task-table');
    container.appendChild(divTable);
    task.forEach((item) => {
      const divRow = document.createElement('div');
      divRow.classList.add('task-row');
      divTable.appendChild(divRow);
      
      const divCell0 = document.createElement('div');
      divCell0.classList.add('task-cell');
      divRow.appendChild(divCell0);
        const taskText0 = document.createElement('div');
        taskText0.classList.add('task-text');
        taskText0.innerHTML = item[0].values[0] + ' ' + item[0].operand + ' ' + item[0].values[1] + ' = ';
        const taskResult0 = document.createElement('div');
        taskResult0.classList.add('task-result');
        divCell0.appendChild(taskText0)
        divCell0.appendChild(taskResult0)
      
      
      const divCell1 = document.createElement('div');
      divCell1.classList.add('task-cell');
      divRow.appendChild(divCell1);
      
      const taskText1 = document.createElement('div');
        taskText1.classList.add('task-text');
        taskText1.innerHTML = item[1].values[0] + ' ' + item[1].operand + ' ' + item[1].values[1] + ' = ';
        const taskResult1 = document.createElement('div');
        taskResult1.classList.add('task-result');
        divCell1.appendChild(taskText1)
        divCell1.appendChild(taskResult1)
    });
  }

  function init() {
    setTextToSubjectContainer()
    removeAllCihldrenFromTasksContainer();
    buildTask(prepareTasks());
  }

  return { init }
}