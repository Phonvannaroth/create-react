import { ICategory } from 'app/redux/interface/category.interfac';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import TableComponent from './category-component/TableComponent';
import useStyle from './CategoryStyle';

interface Props {
    category: Array<ICategory>,
    loading: boolean
}

const CategoryScreen = (props: Props) => {
    const classes = useStyle();
    const navigate = useNavigate()
    const { category, loading } = props
    return (
        <div className={classes.contianer}>
            <TableComponent
                data={category}
                loading={loading}
                onCreate={() => navigate("add-new-category")}
                onView={(id) => { navigate(`edit-category/${id}`) }}
                onEdit={(id) => { navigate(`edit-category/${id}`) }}
            />
        </div>
    )
}

export default CategoryScreen
