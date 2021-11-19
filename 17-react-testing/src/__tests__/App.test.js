import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const defaultTodo = [{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  },
  {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  },
  {
    id: 3,
    name: 'Ship it',
    isComplete: false,
  }
];

const newTodoList = {
  id: 3,
  name: "Learn login",
  isComplete: false,
};
const experied = [newTodoList, ...defaultTodo]
const expectedTrue = JSON.stringify(experied)


// Act
const actualList = AddTodo(defaultTodo, newTodoList);

const hasil = JSON.stringify(actualList)

// Assert
expect(hasil).toBe(expectedTrue);
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const todoList = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {
    id: 2,
    name: "Build awasome react app",
    isComplete: false,
  },
];

const newValue = {
  id: 3,
  name: "Learn login",
  isComplete: false,
};

const expectedtodoList = [{
    id: 1,
    name: "Learn JSX",
    isComplete: false,
  },
  {
    id: 2,
    name: "Build awasome react app",
    isComplete: false,
  },
];

// Act
AddTodo(todoList, newValue);
const actualtodoList = todoList;
const todoListComparation = JSON.stringify(expectedtodoList) === JSON.stringify(actualtodoList);

// // Assert
expect(true).toBe(todoListComparation);
})