import { model, Schema } from "mongoose";

interface ICourseCategory {
  id?: String;
  name: String;
  status: boolean;
}

const CourseCategorySchema = new Schema<ICourseCategory>({
  id: String,
  name: { type: String, required: true },
  status: { type: Boolean, required: true },
});

export const CourseCategory = model<ICourseCategory>(
  "CourseCategories",
  CourseCategorySchema
);
