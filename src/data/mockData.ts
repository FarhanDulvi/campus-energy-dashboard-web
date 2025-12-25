import type { BlockData } from '../types';

export const DAYS = 7;
export const THRESHOLD_LIMIT = 500.0;

export const INITIAL_BLOCK_DATA: BlockData[] = [
    {
        id: 'lecture-hall',
        name: 'Lecture Hall',
        usage: [320.5, 280.0, 350.2, 400.1, 290.5, 150.0, 120.0]
    },
    {
        id: 'lab-block',
        name: 'Lab Block',
        usage: [450.0, 480.5, 510.2, 495.0, 420.0, 200.0, 180.5]
    },
    {
        id: 'library',
        name: 'Library',
        usage: [250.0, 260.5, 255.0, 240.0, 230.5, 200.0, 190.0]
    },
    {
        id: 'hostel',
        name: 'Hostel',
        usage: [480.0, 520.5, 550.0, 530.2, 510.5, 540.0, 525.0]
    }
];
