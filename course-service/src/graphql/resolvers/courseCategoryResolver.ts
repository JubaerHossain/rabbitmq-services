import { CourseCategory } from '../../models/courseCategory';


export const courseCategoryResolver = {
  Query: {
      async getCourseCategory(_: any, __: any, { ID  }: any) {
          return await CourseCategory.findById(ID);
      },
      async getCourseCategory(_: any, __: any, { limit }: any) {
          return await CourseCategory.find().limit(limit);
      }
  },
  Mutation: {
      async createCourseCategory(_: any, { courseCategoryInput: { name, status } }: any) {
          const res = await new CourseCategory({ name, status }).save();

          return res._id;
      },
      async updateCourseCategory(_: any, { ID, courseCategoryInput: { name, status } }: any) {
          await CourseCategory.updateOne({ _id: ID }, { $set: { name, status } });

          return ID;
      },
      async deleteCourseCategory(_: any, { ID }: any) {
          await CourseCategory.remove({ _id: ID });
          return ID;
      }
  }
}
