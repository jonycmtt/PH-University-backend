import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { studentSchemaValidates } from '../student/student.zod.validation';
import validateRequest from '../../middlewares/validateRequest';
import { createFacultyValidationSchema } from '../faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentSchemaValidates.CreateStudentSchemaValidateWithZod),
  UserControllers.createStudent,
);
router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);
router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);

export const UserRoutes = router;
