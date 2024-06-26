import AppError from '../../errors/AppError';
import { TAcademicSemester } from './academic.semester.interface';
import { academicSemesterModel } from './academic.semester.model';
import { academicSemesterNameCodeWrapper } from './academicSemester.constant';

// create
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeWrapper[payload.name] !== payload.code) {
    throw new AppError(404, 'Invalid Semester Code');
  }

  const result = await academicSemesterModel.create(payload);
  return result;
};

const getAllAcademicSemesterIntoDB = async () => {
  const result = await academicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterIntoDB = async (id: string) => {
  const result = await academicSemesterModel.findById(id);
  return result;
};

const updateSingleAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeWrapper[payload.name] !== payload.code
  ) {
    throw new AppError(404, 'Invalid Semester Code');
  }
  const result = await academicSemesterModel.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemesterIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateSingleAcademicSemesterIntoDB,
};
