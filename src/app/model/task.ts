export interface Task {
  id: string;
  userId: number;
  title: string;
  displayTitle: string;
  description: string;
  // estimatedTimeToComplete: string;
  priorityNumber: number;
  status: string;
  createdAt: Date;
  completedAt: Date;
  notes: Note[];
}

export interface Note {
  note: string;
  addedAt: Date;
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
