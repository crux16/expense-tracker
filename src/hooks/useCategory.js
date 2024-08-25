import { useSelector } from "react-redux"
import { selectcategory, selectFilteredCategory, selectIsLoading } from "../redux/category/categorySelector"


export const useCategory = () =>{
    const category = useSelector(selectcategory)
    const isLoading = useSelector(selectIsLoading)
    const filteredCategory = useSelector(selectFilteredCategory)
    return {
        category,
        isLoading,
        filteredCategory,
    }
}