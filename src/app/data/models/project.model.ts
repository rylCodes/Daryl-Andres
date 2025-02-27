interface ProjectTool {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  tools: ProjectTool[];
  links: {
    site: string;
    github: string;
  };
  image: {
    src: string;
    alt: string;
    placeholder: string;
  };
  image_src?: string;
  image_placeholder?: string;
}
