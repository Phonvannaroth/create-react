import { action } from 'app/redux/action';
import { IReducer } from 'app/redux/interface';
import { ICategory, IPayloadFetchCategoryDetail } from 'app/redux/interface/category.interfac';
import { IPayloadSetSidebar } from 'app/redux/interface/setting.interface';
import * as React from 'react';
import { connect } from 'react-redux';
import EditCategoryScreen from './EditCategoryScreen';

interface Props {
    index?: any,
    routes?: any,
    account: any,
    progress: boolean,
    loading: boolean,
    detail: ICategory,
    onSetSidebar: (payload: IPayloadSetSidebar) => void,
    onFetchCategoryDetail: (payload: IPayloadFetchCategoryDetail) => void
}

class EditCategoryContainer extends React.PureComponent<Props, any> {
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
            <EditCategoryScreen
                route={this.props.routes}
                account={this.props.account}
                progress={this.props.progress}
                detail={this.props.detail}
                loading={this.props.loading}
                onFetchCategoryDetail={this.props.onFetchCategoryDetail}
            />
        );
    }
}

const mapStateToProps = (state: IReducer) => {
    return {
        account: state.authReducer.account,
        progress: state.categoryReducer.progress,
        loading: state.categoryReducer.loading,
        detail: state.categoryReducer.detail
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSetSidebar: (payload: IPayloadSetSidebar) =>
            dispatch(action.setting.onSetSidebar(payload)),
        onFetchCategoryDetail: (payload: IPayloadFetchCategoryDetail) =>
            dispatch(action.category.onFetchCategoryDetail(payload)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryContainer);
