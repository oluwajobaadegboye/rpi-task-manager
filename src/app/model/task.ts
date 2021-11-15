export interface Task {
  id: string;
  userId: number;
  title: string;
  displayTitle: string;
  description: string;
  estimatedTimeToComplete: string;
  priorityNumber: number;
  status: string;
  otherUsers: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
  imageUrl: string;
}

export interface Address {
  id: number;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  state: string;
  country: string;
}
