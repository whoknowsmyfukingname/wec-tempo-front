import { FeatType, Milestone, Status } from "../interfaces/milestones.interface";

export const milestones: Milestone[] = [
    {
        position: 0,
        title: 'wec-tempo V.0.1',
        status: Status.DEVELOP,
        completedDate: new Date('2025-6-21'),
        features: [
            {
                type: FeatType.DATABASE,
                status: Status.DEVELOP,
                title: 'Start database',
                tasks: [
                    {
                        status: Status.DONE,
                        title: 'Fill with 2024 races'
                    },
                    {
                        status: Status.DONE,
                        title: 'Add read permissions'
                    },
                ]
            },
            {
                type: FeatType.BACKEND,
                status: Status.DEVELOP,
                title: 'Start backend',
                tasks: [
                    {
                        status: Status.DONE,
                        title: 'Create project with some test endpoints'
                    },
                    {
                        status: Status.DONE,
                        title: 'Deploy working backend'
                    }
                ]
            },
            {
                type: FeatType.FRONTEND,
                status: Status.DEVELOP,
                title: 'Start fontend',
                tasks: [
                    {
                        status: Status.DONE,
                        title: 'Create project and add basic routing'
                    },
                    {
                        status: Status.DONE,
                        title: 'Add milestones page'
                    },
                    {
                        status: Status.DONE,
                        title: 'Deploy working frontend'
                    }
                ]
            }
        ]
    },
    {
        position: 1,
        title: 'wec-tempo V.0.2',
        status: Status.PENDING,
        features: [
            {
                title: 'Create events table',
                type: FeatType.DATABASE,
                status: Status.PENDING,
                tasks: [
                    {
                        status: Status.PENDING,
                        title: 'Create table'
                    },
                    {
                        status: Status.PENDING,
                        title: 'Insert 2024 events'
                    }
                ]
            },
            {
                title: 'Add 2024 qualifying and hyperpole sessions',
                type: FeatType.DATABASE,
                status: Status.PENDING,
                tasks: [
                    {
                        status: Status.PENDING,
                        title: 'merge different classses if separated'
                    },
                    {
                        status: Status.PENDING,
                        title: 'create tables and insert data'
                    }
                ]
            },
            {
                title: 'Get session details',
                type: FeatType.BACKEND,
                status: Status.PENDING,
                tasks: [
                    {
                        status: Status.PENDING,
                        title: 'Prepare endpoint that will allow filters'
                    }
                ]
            },
            {
                title: 'Get data to fill filters',
                type: FeatType.BACKEND,
                status: Status.PENDING,
                tasks: [
                    {
                        status: Status.PENDING,
                        title: 'getYears endpoint'
                    },
                    {
                        status: Status.PENDING,
                        title: 'getEvents endpoint depending on previous filter to fill selectors'
                    },
                    {
                        status: Status.PENDING,
                        title: 'getSessions endpoint depending on previous filters to fill selectors'
                    },
                    {
                        status: Status.PENDING,
                        title: 'getCategories endpoint depending on previous filters to fill selectors'
                    },
                    {
                        status: Status.PENDING,
                        title: 'getParticipants endpoint depending on previous filters to fill selectors'
                    },
                    {
                        status: Status.PENDING,
                        title: 'getRaceData endpoint depending on previous filters to show stats'
                    }
                ]
            },
            {
                title: 'Filters on Tempo page',
                type: FeatType.FRONTEND,
                status: Status.PENDING,
                tasks: [
                    {
                        status: Status.PENDING,
                        title: 'Add filters for each parameter'
                    },
                    {
                        status: Status.PENDING,
                        title: 'Call endpoint and prepare data for Tempo page'
                    }
                ]
            },
            {
                title: 'Tempo page',
                type: FeatType.FRONTEND,
                status: Status.PENDING,
                tasks: [
                    {
                        status: Status.PENDING,
                        title: 'Add chart component for lap times'
                    },
                    {
                        status: Status.PENDING,
                        title: 'Add table with each lap data'
                    },
                    {
                        status: Status.PENDING,
                        title: 'Add extra details to data table'
                    }
                ]
            }
        ]
    }
];