export interface Recipe {
    id:number,
    title:string,
    start_date:string,
    end_date:string,
    notes:string,
    dept_id:number,
    drugs:[
        {
            id:number,
            drug_id:number,
            dose:number,
            unit:number,
            duration:number,
            rotes:string
            drug_details:[
                {
                    id:number,
                    name:number,
                    quantity:number,
                    created_at:string,
                    expire_date:string,
                    unit:number,
                    role_id:[
                        
                    ]
                }
            ]
        }
    ]
}