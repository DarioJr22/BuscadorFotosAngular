export interface dataType{
  //Dados retornados pela API do pexels
  
    next_page: string
    page: number
    per_page: number
    photos: Array<any>
    total_results: number
}