import { User } from './user';
export interface IResult{
    total_count:number;
    incomplete_results:boolean;
    items:User[];
    
}