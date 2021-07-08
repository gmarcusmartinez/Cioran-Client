import { body } from 'express-validator';

export const sprintValidation = [
  body('projectId').not().isEmpty().withMessage('Project id required'),
  body('title').not().isEmpty().withMessage('Title required'),
  body('startDate').not().isEmpty().withMessage('Start Date required'),
  body('endDate').not().isEmpty().withMessage('End Date required'),
];
