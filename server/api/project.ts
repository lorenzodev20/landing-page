import type { Project } from '~/types/Project';
import type { Slug } from '~/types/Slug';
import projects from '~/utils/projects.json'

export default defineEventHandler((event) => {
  //let obj: Project;
  let param: Slug|null =  getQuery(event)
  let obj: Project = projects.data.find((data) => data.slug === param?.slug)
  return {
    project: obj

  }
})
