import { TypeTechnology } from "./typeTechnology";

export interface Technology {
  
  technology_id: number;
  technology_name: string;
  typeTechnology: TypeTechnology; //fk
  
}
