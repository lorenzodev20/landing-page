import type { Project } from '~/types/Project';
import projects from '~/utils/projects.json'

export const useProjects = () => {
    const detailProject = async () => {
        let obj: Project[] = projects.data
        console.log(obj);
        return obj;
    }
    return { detailProject }
};
