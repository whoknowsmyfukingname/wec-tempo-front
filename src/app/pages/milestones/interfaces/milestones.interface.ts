export interface Milestone {
    position: number;
    title: string;
    status: Status;
    completedDate?: Date
    features: Feature[];
}

export interface Feature {
    title: string;
    type: FeatType;
    status: Status;
    tasks: Task[];
}

export interface Task {
    title: string;
    status: Status;
}

export enum FeatType {
    DATABASE,
    FRONTEND,
    BACKEND
}

export enum Status {
    PENDING,
    DEVELOP,
    DONE,
    DROPPED
}