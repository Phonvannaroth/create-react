import { action } from 'app/redux/action';
import { IReducer } from 'app/redux/interface';
import { ICategory } from 'app/redux/interface/category.interfac';
import { IPayloadSetSidebar } from 'app/redux/interface/setting.interface';
import * as React from 'react';
import { connect } from 'react-redux';
import CategoryScreen from './CategoryScreen';

interface Props {
    index?: any,
    category: Array<ICategory>,
    loading: boolean,
    onSetSidebar: (payload: IPayloadSetSidebar) => void,
    onFetchCategory: () => void
}

class CategoryContainer extends React.PureComponent<Props, any> {
    constructor(props: Props) {
        super(props);
        this.props.onSetSidebar({ index: this.props.index });
        this.props.onFetchCategory()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    render() {
        // eslint-disable-next-line no-console
        console.log(`this.props.category`, this.props.category)
        return (
            <CategoryScreen
                category={this.props.category}
                loading={this.props.loading}
            />
        );
    }
}

const mapStateToProps = (state: IReducer) => {
    return {
        category: state.categoryReducer.category,
        loading: state.categoryReducer.loading,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSetSidebar: (payload: IPayloadSetSidebar) =>
            dispatch(action.setting.onSetSidebar(payload)),
        onFetchCategory: () => dispatch(action.category.onFetchCategory())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
