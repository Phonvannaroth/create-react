import { action } from 'app/redux/action';
import { IReducer } from 'app/redux/interface';
import { IPayloadCreateNewCategory } from 'app/redux/interface/category.interfac';
import { IPayloadSetSidebar } from 'app/redux/interface/setting.interface';
import * as React from 'react';
import { connect } from 'react-redux';
import AddNewCategoryScreen from './AddNewCategoryScreen';

interface Props {
    index?: any,
    routes?: any,
    account: any,
    progress: boolean,
    onSetSidebar: (payload: IPayloadSetSidebar) => void,
    onCreateNewCategory: (payload: IPayloadCreateNewCategory) => void
}

class AddNewCategoryContainer extends React.PureComponent<Props, any> {
    constructor(props: Props) {
        super(props);
        this.props.onSetSidebar({ index: this.props.index });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    render() {
        return (
            <AddNewCategoryScreen
                route={this.props.routes}
                account={this.props.account}
                progress={this.props.progress}
                onCreateNewCategory={this.props.onCreateNewCategory}
            />
        );
    }
}

const mapStateToProps = (state: IReducer) => {
    return {
        account: state.authReducer.account,
        progress: state.categoryReducer.progress
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSetSidebar: (payload: IPayloadSetSidebar) =>
            dispatch(action.setting.onSetSidebar(payload)),
        onCreateNewCategory: (payload: IPayloadCreateNewCategory) =>
            dispatch(action.category.onCreateNewCategory(payload)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCategoryContainer);
