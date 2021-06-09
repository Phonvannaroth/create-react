/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/state-in-constructor */
import React from 'react'
import DashboardScreen from './DashboardScreen'

interface Props {

}
interface State {

}

export default class DashboardContainer extends React.PureComponent<Props, State> {
    state = {}

    render() {
        return (
            <DashboardScreen />
        )
    }
}
