import { Employee } from 'src/models/employee';
export const MOCK_EMPLOYEE_SINGLE: Employee = {
  name: 'Ivanov Ivan',
  color: '#ABABAB',
  id: 1,
  created_at: new Date(Date.now()),
};
export const MOCK_EMPLOYEE_LIST: Employee[] = [
  {
    name: 'Ivanov Ivan',
    color: '#ABABAB',
    id: 1,
    created_at: new Date(Date.now()),
  },
  {
    name: 'Petrov Petr',
    color: '#ffabab',
    id: 2,
    created_at: new Date(Date.now()),
  },
];
