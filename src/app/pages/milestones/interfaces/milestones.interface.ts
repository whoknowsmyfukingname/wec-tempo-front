export interface Milestone {
    position: number;
    title: string;
    completedDate?: Date
    features: Feature[];
}

export interface Feature {
    title: string;
    type: FeatType;
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