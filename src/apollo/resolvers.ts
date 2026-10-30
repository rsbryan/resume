import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { RESUME_DATA } from "../data/resume-data";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    // Keep descriptions as strings for existing GraphQL clients.
    return {
      ...RESUME_DATA,
      work: RESUME_DATA.work.map((work) => ({
        ...work,
        description: work.description.join(" "),
      })),
      projects: RESUME_DATA.projects.map((project) => ({
        ...project,
        description: project.description.join(" "),
      })),
    } as any;
  }
}
